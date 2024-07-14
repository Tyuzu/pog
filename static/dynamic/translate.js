//<form id="newTranslate" ><input id="ogtext" type="text" name="trns" required /><br><div id='upbtn' onclick="CreateNewTranslateNow();" style="width:4rem;height:4rem;background:#ccc;">Translate</div></form> <p id="preview"></p>
function createTranslateBody() {
	window.history.pushState("object or string", "Translate", "/translate");
	let html = ``
	html += `<section class="flexh">
		<div class="left">
			<div class="flexh">
				<span class="lng" id="oglen">Japanese</span>
				<button onclick="SwapLangsNow();">Swap</button>
			</div>
			<textarea id="ogtext" type="text" name="trns" required ></textarea>
			<div class="flexh">
				<div class="flexh">
					<button onclick="SpeakNewTranslateNow('ogtext');">Speak</button>
					<button onclick="CopyNewTranslateNow();">Copy</button>
					<button onclick="CreateNewTranslateNow();">Translate</button>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="flexh">
				<span class="lng" id="reslen">Urdu</span>
			</div>
			<textarea id="restext" type="text" name="trns" required ></textarea>
			<div class="flexh">
				<div class="flexh">
					<button onclick="CopyNewTranslateNow();">Copy</button>
					<button onclick="SpeakNewTranslateNow('restext');">Speak</button>
				</div>
					<button id="play">Play</button>
					<button id="stop">Stop</button>
			</div>
		</div>
		</section>`;
	document.getElementById("main").innerHTML = html;
}

async function SpeakNewTranslateNow(id) {
        if ('speechSynthesis' in window) with(speechSynthesis) {


            var playEle = document.querySelector('#play');
            var pauseEle = document.querySelector('#play');
            var stopEle = document.querySelector('#stop');
            var flag = false;


            playEle.addEventListener('click', onClickPlay);
            stopEle.addEventListener('click', onClickStop);

            function onClickPlay() {
                if (!flag) {
                    flag = true;
                    utterance = new SpeechSynthesisUtterance(document.getElementById(id).value);
                    utterance.voice = getVoices()[0];
                    utterance.onend = function() {
                        flag = false;
                        playEle.className = pauseEle.className = '';
                        stopEle.className = 'stopped';
                    };
                    playEle.className = 'played';
                    stopEle.className = '';
                    speak(utterance);
                }
                if (paused) { /* unpause/resume narration */
                    playEle.className = 'played';
                    pauseEle.className = '';
                    resume();
                }
            }

            function onClickStop() {
                if (speaking) { /* stop narration */
                    /* for safari */
                    stopEle.className = 'stopped';
                    playEle.className = pauseEle.className = '';
                    flag = false;
                    cancel();

                }
            }

        }

        else { /* speech synthesis not supported */
            msg = document.createElement('h5');
            msg.textContent = "Detected no support for Speech Synthesis";
            msg.style.textAlign = 'center';
            msg.style.backgroundColor = 'red';
            msg.style.color = 'white';
            msg.style.marginTop = msg.style.marginBottom = 0;
            document.body.insertBefore(msg, document.querySelector('div'));
        }
}

async function CopyNewTranslateNow() {
	
}

async function SwapLangsNow() {
	var oglen = document.getElementById("oglen").innerText;
	var reslen = document.getElementById("reslen").innerText;
	document.getElementById("oglen").innerText = reslen;
	document.getElementById("reslen").innerText = oglen;
}



async function CreateNewTranslateNow() {
	//document.getElementById('upbtn').style.display = "none";
	var og = document.getElementById('ogtext').value;
	const formData = new FormData();
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "//atapi-vatapi.onrender.com/csrf", true);
	xhr.onload = () => {
		formData.append("csrftoken", xhr.responseText);
		formData.append("trns", og);
		SendTranslateReq(formData);
	};
	xhr.send(null);
}

async function SendTranslateReq(formData) {
  try {
    const response = await fetch("//atapi-vatapi.onrender.com/translate", {
      method: "POST",
      body: formData,
    });
    const result = await response.text();
    console.log("Success:", result);
	const obj = JSON.parse(result);
	document.getElementById('restext').value = obj.translated;
	//~ alert(obj.translated,obj.lang);
	//~ afterUpload(result);
  } catch (error) {
    console.error("Error:", error);
  }
}



function myFunction() {
	document.getElementById('upbtn').style.display = "block";
}

