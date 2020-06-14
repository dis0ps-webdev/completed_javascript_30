const videoPlayer = document.querySelector(".player__video");
const playButton = document.querySelector(".player__button");
const volumeSlide = document.querySelector("input[name=volume]");
const speedSlide = document.querySelector("input[name=playbackRate]");
const skipButton = document.querySelectorAll("button[data-skip]");
const progressBarFilled = document.querySelector(".progress__filled");
const progressBar = document.querySelector(".progress");
const fsButton = document.querySelector("button[name=fullscreen]");

let playing = false;
let mouseDown = false;
// play

playButton.addEventListener("click", startStopPlay);
videoPlayer.addEventListener("click", startStopPlay);

function startStopPlay() {
  if (playing) {
    videoPlayer.pause();
  } else {
    videoPlayer.play();
  }
  playing = !playing;
}

// pause

videoPlayer.pause();

// total time

console.log(videoPlayer.duration);

// current position

console.log(videoPlayer.currentTime);

// volume values 0 - 1

console.log(videoPlayer.volume);

volumeSlide.addEventListener("change", (e) => {
  videoPlayer.volume = e.target.value;
});

speedSlide.addEventListener("change", (e) => {
  videoPlayer.playbackRate = e.target.value;
});

//skip

skipButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    videoPlayer.currentTime += parseInt(e.target.attributes["data-skip"].value);
  });
});

progressBar.addEventListener("click", scrubVideo);
progressBar.addEventListener("mousedown", (e) => {
  mouseDown = true;
  scrubVideo(e);
});
progressBar.addEventListener("mouseup", () => (mouseDown = false));
progressBar.addEventListener("mousemove", scrubVideo);

function scrubVideo(e) {
  if (mouseDown) {
    let progbarPercent = e.offsetX / progressBar.offsetWidth;
    videoPlayer.currentTime = videoPlayer.duration * progbarPercent;
  }
}

// progress updates

videoPlayer.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  progressBarFilled.style.flexBasis = `${
    (videoPlayer.currentTime / videoPlayer.duration) * 100
  }%`;
}

// Fullscreen

fsButton.addEventListener("click", () => videoPlayer.requestFullscreen());
