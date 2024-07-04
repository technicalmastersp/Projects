
// ~~~~~~~~~~~~~~~~~~~~    for Video tag show or input tag hide ~~~~~~~~~~~~~~~~~~~~

function loadVideo(input) {
  const video = document.getElementById("myVideo");
  const file = input.files[0];
  const url = URL.createObjectURL(file);
  video.src = url;
  video.style.display = "block";
  input.style.display = "none";
  video.play();
}

// ~~~~~~~~~~~~~~~~~~~~    for Video speed button show or hide ~~~~~~~~~~~~~~~~~~~~

var toggleButton = document.getElementById("toggleButton");
var buttonBox = document.getElementById("buttonBox");

toggleButton.addEventListener("click", function() {
    if (buttonBox.style.display === "none") {
        buttonBox.style.display = "block";
    } else {
        buttonBox.style.display = "none";
    }
});


// ~~~~~~~~~~~~~~~~~~~~    for ( Change Video Speed ) Button ~~~~~~~~~~~~~~~~~~~~
function setSpeed(speed) {
  document.getElementById("myVideo").playbackRate = speed;
}

// ~~~~~~~~~~~~~~~~~~~~    for ( Change Video ) Button ~~~~~~~~~~~~~~~~~~~~
var videoInput = document.getElementById("videoInput");
function changeVideoSource() {
  videoInput.value = null;
  videoInput.click();
}

// ~~~~~~~~~~~~~~~~~~~~    for ( Video Name Display ) Button ~~~~~~~~~~~~~~~~~~~~
var videoTitleDiv = document.getElementById("videoTitle");
function setVideoTitle() {
  var fileName = videoInput.files[0].name;
  videoTitleDiv.textContent = " " + fileName;
}
myVideo.addEventListener("loadedmetadata", function () {
  setVideoTitle();
});
