
//~ var obj = {
  //~ "tags": [
    //~ "tag1",
    //~ "tag2",
    //~ "tag3"
  //~ ],
  //~ "date": "daet",
  //~ "location": "loc",
  //~ "id": 123,
  //~ "title": "title",
  //~ "object": {
    //~ "a": "b",
    //~ "c": "d"
  //~ },
  //~ "type": "Typ"
//~ }
	//~ let createEvent = `Create : <form>
		//~ <input type="text" name="title" placeholder="title" value="" />
		//~ <input type="text" name="location" placeholder="location" value="" />
		//~ <input type="text" name="date" placeholder="date" value="" />
		//~ <input type="text" name="type" placeholder="type" value="" />
	//~ </form>`
//~ document.getElementById('main').innerHTML = createEvent;
	//~ let editEvent = `Edit : <form>
		//~ <input type="text" name="title" placeholder="title" value="${obj.title}" />
		//~ <input type="text" name="location" placeholder="location" value="${obj.location}" />
		//~ <input type="text" name="date" placeholder="date" value="${obj.date}" />
		//~ <input type="text" name="type" placeholder="type" value="${obj.type}" />
	//~ </form>`
//~ document.getElementById('main').innerHTML = editEvent;


function createNewEventForm() {
	window.history.pushState("object or string", "Events", "/event/new");
	let html = `<form>
		<input type="text" name="title" placeholder="Event Title" id="evettitle" required/><br>
		<input type="text" name="category" placeholder="Event Category" id="evetcategory" required/><br>
		<input type="text" name="evettype" placeholder="Ticketed, Public, Private" id="evettype" required/><br>
		<input type="text" name="location" placeholder="location" id="evetlocation" required/><br>
		<label for="starttime">Start date and time : </label><br>
		<input type="date" id="startdate" name="evetstartdate"><br>
		<input type="time" id="starttime" name="evetstarttime"><br>
		<label for="endtime">End date and time : </label><br>
		<input type="date" id="enddate" name="evetenddate"><br>
		<input type="time" id="endtime" name="evetendtime"><br>
		<span>Description: </span><br>
		<textarea name="description" id="evetdesc"></textarea><br>
		<input id="inptfile" type="file" accept="image/*.video/*" multiple style="display:none;"  required /><br>
		<div id='upbtn' onclick="uploadnow();" style="width:4rem;height:4rem;background:#ccc;">Upload</div>
	</form>
	<div id="preview"></div>`;
	document.getElementById("main").innerHTML = html;
document.getElementById("inptfile").addEventListener("change", myFunction);
}


function myFunction() {
		//~ var x = document.getElementById("fname");
		//~ x.value = x.value.toUpperCase();
		document.getElementById('upbtn').style.display = "block";
		//document.getElementById('preview').innerHTML = `<div class="FeedArtistLayoutView_main__r0yQj artist"><div style="aspect-ratio: 706.99 / 588.89; content-visibility: auto; contain-intrinsic-size: 706.99px 588.89px;"><ul id="pics"></ul></div></div>`;
	}
	
async function uploadnow() {
	
	var wht = document.getElementById('evettitle').value;
	if (wht == "") {alert("what is title?");return}
	var whr = document.getElementById('evetlocation').value;
	if (whr == "") {alert("where is location?");return}
	var whns = document.getElementById('startdate').value;
	if (whns == "") {alert("when is start date?");return}
	var whnst = document.getElementById('starttime').value;
	if (whnst == "") {alert("when is start time?");return}
	var whne = document.getElementById('enddate').value;
	if (whne == "") {alert("when is end date?");return}
	var whnet = document.getElementById('endtime').value;
	if (whnet == "") {alert("when is end time?");return}
	var typ = document.getElementById('evettype').value;
	if (typ == "") {alert("what is type?");return}
	var cat = document.getElementById('evetcategory').value;
	if (cat == "") {alert("what is category?");return}	
	var desc = document.getElementById('evetdesc').value;
	document.getElementById('upbtn').style.display = "none";
	const formData = new FormData();
		formData.append("what", wht);
		formData.append("where", whr);
		formData.append("whens", whns);
		formData.append("whenst", whnst);
		formData.append("whene", whne);
		formData.append("whenet", whnet);
		formData.append("typ", typ);
		formData.append("cat", cat);
		formData.append("desc", desc);
	const fileField = document.querySelector('input[type="file"][multiple]');
	//formData.append("key", "whatever");
	//~ formData.append("file", fileField.files[0]);
	for (const [i, photo] of Array.from(fileField.files).entries()) {
		formData.append(`file`, photo);
	}
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "//atapi-vatapi.onrender.com/csrf", true);
	xhr.onload = () => {
		formData.append("csrftoken", xhr.responseText);
		uploadMultiple(formData);
	};
	xhr.send(null);
}


async function uploadMultiple(formData) {
  try {
    const response = await fetch("//atapi-vatapi.onrender.com/event/new", {
      method: "POST",
      body: formData,
    });
    const result = await response.text();
    console.log("Success:", result);
	const obj = JSON.parse(result);
	//~ renderPixcs(obj.what,obj.where,obj.when,obj.eventid);
	renderPixcs(obj.what, obj.where, obj.whens, obj.whene, obj.whenst, obj.whenet,obj.eventid, obj.typ, obj.cat, obj.desc);
	//~ afterUpload(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

//~ function afterUpload(html) {
	//~ document.getElementById("main").innerHTML = html;
//~ }

function renderPixcs( what, where, whens, whene, whenst, whenet, eventid, eventtype, eventcategory, eventdesc) {
	document.getElementById("main").innerHTML = `<p>What : ${what}, <br>Where : ${where}, <br>Whens : ${whens}, <br>Whene : ${whene}, <br>Whenst : ${whenst}, <br>Whenet : ${whenet}, <br>Event Type : ${eventtype}, <br>Category : ${eventcategory}, <br>Description : ${eventdesc}, <br><a href='//atapi-vatapi.netlify.app/event?eventid=${eventid}'>Go to link</a></p>`;
};


async function getEvent() {
	var url = new URL(window.location.href);
	var eventid = url.searchParams.get("eventid");
	console.log(eventid);
	try {
		const response = await fetch("//atapi-vatapi.onrender.com/event?eventid="+eventid, {
			method: "GET",
    });
    const result = await response.text();
    console.log("Success:", result);
	const obj = JSON.parse(result);
	let html = `<section id="events"></section>`;
	document.getElementById("main").innerHTML = html;
	document.getElementById("events").innerHTML = "<p>"+"<br>"+obj.what+"<br>"+obj.where+"<br>"+obj.whens+"<br>"+obj.whene+"<br>"+obj.whenst+"<br>"+obj.whenet+"<br>"+obj.eventid+"<br>"+obj.typ+"<br>"+obj.cat+"<br>"+obj.desc+"</p>";
  } catch (error) {
    console.error("error");
  }
}