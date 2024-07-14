function VideoPlayer(gl,postname) {
	var vid = document.createElement('video');
	vid.setAttribute('class',"hvideo");
	vid.src = "//atapi-vatapi.onrender.com/video/" + postname + "_" + "1.mp4";
	vid.autoplay = false;
	vid.controls = true;
	vid.loop = true;
	vid.poster = "//atapi-vatapi.onrender.com/image/" + postname + "_1.jpg";
	gl.appendChild(vid);
}