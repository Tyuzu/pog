
function createPostBody() {
	let html = `<section id="pics"></section><section class="content" id="vids"></section>`;
	document.getElementById("main").innerHTML = html;
	var url = new URL(window.location.href);
	var c = url.searchParams.get("postid");
	console.log(c);
	getPost(c)
}
function loadScript(filename,callback){
  var fileref=document.createElement('script');
  fileref.setAttribute("type","text/javascript");
  fileref.onload = callback;
  fileref.setAttribute("src", filename);
  if (typeof fileref!="undefined"){
    document.getElementsByTagName("head")[0].appendChild(fileref)
  }
}

async function getPost(postid) {
	//~ var urlforpost = "//localhost:4371/post?postid="+postid;
    //~ try {
      //~ const response = await fetch(urlforpost, {
        //~ method: "GET",
      //~ });
      //~ const result = await response.text();
      //~ console.log("Success:", result);
      //~ const obj = JSON.parse(result);
//      //~ renderPixcs(obj.postname,obj.postcount,obj.posttype);
      renderPixcs(postid,"1");
//      //~ afterUpload(obj.postname);
    //~ } catch (error) {
      //~ console.error("Error:", error);
    //~ }
}
  
  
  function renderPixcs(postname, count) {
      var gl = document.getElementById('vids');
      var ul = document.getElementById('pics');
	  console.log(postname);
	  if (postname.charAt(0) == "i") {
		for(var i=0;i<count;i++){
			var li = document.createElement('li');
			li.setAttribute('class',"PostPreviewImageView_image_item__dzD2P");
			var img = document.createElement('img');
			img.setAttribute('class',"PostPreviewImageView_post_image__zLzXH");
			img.src = "//atapi-vatapi.onrender.com/image/" + postname + "_" + (i+1) + ".png";
			li.appendChild(img);
			ul.appendChild(li);
		  }
			setClass(ul, count);
	  } else {
			loadScript('/static/dynamic/player.js',function(){
				console.log('done loading player.js');
				VideoPlayer(gl,postname);
			});
			//~ var vid = document.createElement('video');
			//~ vid.setAttribute('class',"PostPreviewImageView_post_image__zLzXH");
			//~ vid.src = "//localhost:4371/video/" + postname + "_" + "1.mp4";
			//~ vid.autoplay = false;
			//~ vid.controls = true;
			//~ vid.loop = true;
			//~ vid.poster = "//localhost:4371/image/" + postname + "_1.jpg";
			//~ gl.appendChild(vid);
	  }
  };
  
  
  
  //~ function renderPixcs(postname, count) {
      //~ var gl = document.getElementById('vids');
      //~ var ul = document.getElementById('pics');
	  //~ console.log(postname);
	  //~ if (postname.charAt(0) == "i") {
		//~ for(var i=0;i<count;i++){
			//~ var li = document.createElement('li');
			//~ li.setAttribute('class',"PostPreviewImageView_image_item__dzD2P");
			//~ var img = document.createElement('img');
			//~ img.setAttribute('class',"PostPreviewImageView_post_image__zLzXH");
			//~ img.src = "//localhost:4371/image/" + postname + "_" + (i+1) + ".png";
			//~ li.appendChild(img);
			//~ ul.appendChild(li);
		  //~ }
			//~ setClass(ul, count);
	  //~ } else {
		  //~ var vid = document.createElement('video');
		  //~ vid.setAttribute('class',"PostPreviewImageView_post_image__zLzXH");
		  //~ vid.src = "//localhost:4371/video/" + postname + "_" + "1.mp4";
		  //~ vid.autoplay = false;
		  //~ vid.controls = true;
		  //~ vid.loop = true;
		  //~ vid.poster = "//localhost:4371/image/" + postname + "_1.jpg";
		  //~ gl.appendChild(vid);
	  //~ }
  //~ };
  
  
  async function setClass(ul,count) {
      console.log(count);
      switch (count) {
          case 1 : {
              ul.setAttribute('class',"PostPreviewImageView_preview_image_wrap__Q29V8 PostPreviewImageView_-artist__WkyUA PostPreviewImageView_-bottom_radius__Mmn-- PostPreviewImageView_-one__-6MMx");
              break;
          }
          case 2 : {
              ul.setAttribute('class',"PostPreviewImageView_preview_image_wrap__Q29V8 PostPreviewImageView_-artist__WkyUA PostPreviewImageView_-bottom_radius__Mmn-- PostPreviewImageView_-two__WP8GL");
              break;
          }
          case 3 : {
              ul.setAttribute('class',"PostPreviewImageView_preview_image_wrap__Q29V8 PostPreviewImageView_-artist__WkyUA PostPreviewImageView_-bottom_radius__Mmn-- PostPreviewImageView_-three__HLsVN");
              break;
          }
          case 4 : {
              ul.setAttribute('class',"PostPreviewImageView_preview_image_wrap__Q29V8 PostPreviewImageView_-artist__WkyUA PostPreviewImageView_-bottom_radius__Mmn-- PostPreviewImageView_-four__fYIRN");
              break;
          }
          case 5 : {
              ul.setAttribute('class',"PostPreviewImageView_preview_image_wrap__Q29V8 PostPreviewImageView_-artist__WkyUA PostPreviewImageView_-bottom_radius__Mmn-- PostPreviewImageView_-five__RZvWx");
              break;
          }
          case 6 : {
              ul.setAttribute('class',"PostPreviewImageView_preview_image_wrap__Q29V8 PostPreviewImageView_-artist__WkyUA PostPreviewImageView_-bottom_radius__Mmn-- PostPreviewImageView_-six__Ds3aG");
              break;
          }
          case 7 : {
              ul.setAttribute('class',"PostPreviewImageView_preview_image_wrap__Q29V8 PostPreviewImageView_-artist__WkyUA PostPreviewImageView_-bottom_radius__Mmn-- PostPreviewImageView_-seven__65gnj");
              break;
          }
          case 8 : {
              ul.setAttribute('class',"PostPreviewImageView_preview_image_wrap__Q29V8 PostPreviewImageView_-artist__WkyUA PostPreviewImageView_-bottom_radius__Mmn-- PostPreviewImageView_-eight__SoycA");
              break;
          }
          case 9 : {
              ul.setAttribute('class',"PostPreviewImageView_preview_image_wrap__Q29V8 PostPreviewImageView_-artist__WkyUA PostPreviewImageView_-bottom_radius__Mmn-- PostPreviewImageView_-nine__Hsd7g");
              break;
          }
      }
  }
  
async function getPlace() {
	var url = new URL(window.location.href);
	var placeid = url.searchParams.get("placeid");
	console.log(placeid);
	try {
		const response = await fetch("//atapi-vatapi.onrender.com/place?placeid="+placeid, {
			method: "GET",
    });
    const result = await response.text();
    console.log("Success:", result);
	const obj = JSON.parse(result);
	let html = `<section id="places"></section>`;
	document.getElementById("main").innerHTML = html;
	document.getElementById("places").innerHTML = "<p>"+"<br>"+obj.nameofplace+"<br>"+obj.address+"<br>"+obj.category+"<br>"+obj.closingtime+"<br>"+obj.openingtime+"<br>"+obj.phonenumber+"<br>"+obj.instagaram+"<br>"+obj.website+"<br>"+obj.facilities+"<br>"+obj.about+"<br>"+obj.paymentmethod+"<br>"+obj.keyword+"</p>";
	//~ document.getElementById("places").innerHTML = "<p>"+"<br>"+nameofplace+"<br>"+address+"<br>"+category+"<br>"+closingtime+"<br>"+openingtime+"<br>"+phonenumber+"<br>"+instagaram+"<br>"+website+"<br>"+facilities+"<br>"+about+"<br>"+paymentmethod+"<br>"+keyword+"<br><span id='pagelink'></span></p>";
  } catch (error) {
    console.error("Error:", error);
  }
}

