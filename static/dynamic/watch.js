async function Player(postid) {
var mainVidTmpl = `<div id="snackbar"></div>
		<main>
		<section class="content" id="videocon">
				<video id="mainvid" autoplay width="320" height="480" preload="metadata" loop poster="#" class="hvideo">
					<source id='vidsrc' src="#" type="video/mp4">
					Your browser does not support the video tag.
				</video>
				<div onclick='playMe()' class="overly"></div>
			</section>
		<section class="content">
			<div class="player-controls">
                <div class="play-duration">
                    <div class="play-duration-bar"></div>
                </div>
				<div class="buttonbar">
					<button onclick='slower()' id="slower" class="sqrBtn btn">&#10134;</button>
					<button onclick='resetSpeed()' id="normal" class="sqrBtn btn">&#9868;</button>
					<button  onclick='faster()' id="faster" class="sqrBtn btn" >&#10133;</button>
					<button  id="mute" class="sqrBtn btn" >&#128263;</button>
					<button class="saveBtn  btn" id="share" title="Share button" value="/v/{{.URL}}" onclick="navigator.clipboard.writeText(window.location.href);mySnack('copied URL to share');">Share</button>
                </div>
				<div class="buttonbar">
					<button class="saveBtn  btn" id="delete" title="Delete button" value="{{.URL}}">Del</button>
					<button class="saveBtn  btn" id="like" title="Like button" value="{{.URL}}">Like</button>
					<button class="saveBtn  btn" id="addtocoll" title="Save button">Save</button>
					<button class="saveBtn  btn" id="report" title="Report button">Report</button>
				</div>
            </div>
			</section>
	<br />
	
<div id="collectionmodal" class="modal">
	<div class="modal-content">
		<header>
			<h2>Collections</h2>
			<button class="close-button" onclick="toggleCollectionModal();">Close</button>
		</header>
		<div id="listofcolls"></div>
	</div>
</div>

<div id="reportmodal" class="modal">
	<div class="modal-content">
		<header>
			<h2>Report</h2>
			<button class="close-button" onclick="toggleReportModal();">Close</button>
		</header>
		<div id="reportOptions">
   <div class="root-modal__content">
      <div class="report-modal report-modal--gif">
         <div class="report__title">Why are you reporting this GIF?</div>
         <div class="report__options">
            <div class="radio-input-container report-option">
               <label class="gfycat-text-regular">
                  <div class="radio-input">
                     <input type="radio" name="report" value="">
                  </div>
                  <span>Sexually explicit</span>
               </label>
            </div>
            <div class="radio-input-container report-option">
               <label class="gfycat-text-regular">
                  <div class="radio-input">
                     <input type="radio" name="report" value="">
                  </div>
                  <span>Suggestive / provocative</span>
               </label>
            </div>
            <div class="radio-input-container report-option">
               <label class="gfycat-text-regular">
                  <div class="radio-input">
                     <input type="radio" name="report" value="">
                  </div>
                  <span>Violence / death / offensive / disturbing</span>
               </label>
            </div>
            <div class="radio-input-container report-option">
               <label class="gfycat-text-regular">
                  <div class="radio-input">
                     <input type="radio" name="report" value="">
                  </div>
                  <span>Copyright / I own this content</span>
               </label>
            </div>
            <div class="radio-input-container report-option">
               <label class="gfycat-text-regular">
                  <div class="radio-input">
                     <input type="radio" name="report" value="">
                  </div>
                  <span>I am in this GIF</span>
               </label>
            </div>
            <div class="radio-input-container report-option">
               <label class="gfycat-text-regular">
                  <div class="radio-input">
                     <input type="radio" name="report" value="">
                  </div>
                  <span>Other</span>
               </label>
            </div>
         </div>
         <div class="report__footer"><button onclick="AddToColl()" id="a2creport" value='{{.URL}}'>Submit</button></div>
      </div>
   </div>
		</div>
	</div>
</div>`;
		
		document.getElementById("main").innerHTML = mainVidTmpl;
		let params = new URLSearchParams(document.location.search);
		let paramname = params.get("postid");
		//~ document.getElementsByTagName('source')[0].src="//localhost:4371/video/"+paramname+".mp4#t=0.01";
		console.log("Heeya");
		document.getElementsByTagName('source')[0].src="//atapi-vatapi.onrender.com/video/" + postid + "_1.mp4";
	}
			function playMe() {
				var video = document.getElementById("vidsrc");
				if (video.paused) {   // play the file, and display pause symbol 
					video.play(); 
				} else {              // pause the file, and display play symbol   
					video.pause(); 
				} 
			};
			
			function mute() {
				var video = document.getElementById("vidsrc");
				if (video.muted) { 
					video.muted = false; 
				} else { 
					video.muted = true; 
				} 
		};

/*
async function Player(postid) {
var mainVidTmpl = `<section class="content" id="videocon">
				<video id="mainvid" autoplay width="320" height="480" preload="metadata" loop poster="#" class="hvideo">
					<source id='vidsrc' src="#" type="video/mp4">
					Your browser does not support the video tag.
				</video>
				<div onclick='playMe()' class="overly"></div>
			</section>			
		<section class="content">
			<div class="player-controls">
                <div class="play-duration">
                    <div class="play-duration-bar"></div>
                </div>
				<div class="buttonbar">
					<button class="saveBtn  btn" id="share" title="Share button" onclick="navigator.clipboard.writeText(window.location.href);">Share</button>
                </div>
            </div>
			</section>`;
		
		document.getElementById("main").innerHTML = mainVidTmpl;
		let params = new URLSearchParams(document.location.search);
		let paramname = params.get("postid");
		//~ document.getElementsByTagName('source')[0].src="//localhost:4371/video/"+paramname+".mp4#t=0.01";
		document.getElementsByTagName('source')[0].src="//localhost:4371/video/" + postid + "_1.mp4";
			var video = document.getElementById("mainvid");
			video.muted = true;
	}
			function playMe() {
				var video = document.getElementById("mainvid");
				if (video.paused) {   // play the file, and display pause symbol 
					video.play(); 
				} else {              // pause the file, and display play symbol   
					video.pause(); 
				} 
			};
			
			function mute() {
				var video = document.getElementById("mainvid");
				if (video.muted) { 
					video.muted = false; 
				} else { 
					video.muted = true; 
				} 
		};*/