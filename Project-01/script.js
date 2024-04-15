function loadVideo(input) {
    const video = document.getElementById('myVideo');
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    video.src = url;
    video.style.display = "block";
    input.style.display = "none";
    
    video.play();
}
function showDiv() {
    const buttonBox = document.getElementById('buttonBox');
    if (buttonBox.style.display === 'none') {
        buttonBox.style.display = 'inline';
    }   else {
        buttonBox.style.display = 'none';
    }

    buttonBox.style.display = 'flex';
    buttonBox.style.justifyContent = "center";
    buttonBox.style.alignItems = "center";
}

// ~~~~~~~~~~~~~~~~~~~~    for ( Change Video Speed ) Button ~~~~~~~~~~~~~~~~~~~~
function setSpeed(speed) {
    document.getElementById('myVideo').playbackRate = speed;
};


// ~~~~~~~~~~~~~~~~~~~~    for ( Change Video ) Button ~~~~~~~~~~~~~~~~~~~~
var videoInput = document.getElementById('videoInput');
function changeVideoSource() {
    videoInput.value = null;
    videoInput.click();
}


// ~~~~~~~~~~~~~~~~~~~~    for ( Video Name Display ) Button ~~~~~~~~~~~~~~~~~~~~
var videoTitleDiv = document.getElementById('videoTitle');
function setVideoTitle() {
    var fileName = videoInput.files[0].name;
    videoTitleDiv.textContent = "Currently Playing: " + fileName;
}
myVideo.addEventListener('loadedmetadata', function() {
    setVideoTitle();
});