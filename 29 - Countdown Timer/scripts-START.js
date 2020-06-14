const displayTimeLeft = document.querySelector(".display__time-left");
const displayTimeEnd = document.querySelector(".display__end-time");
const customTime = document.querySelector("#custom");
const timerControls = document.querySelectorAll(".timer__controls > button");

let lastInterval = null;
let secondsRemaining = 0;
let endTime = "";

function setBreakTime(seconds) {
  if (lastInterval != null) {
    clearInterval(lastInterval);
  }
  secondsRemaining = seconds;
  endTime = getEndTimestamp(secondsRemaining);
  lastInterval = setInterval(() => {
    if (secondsRemaining >= 0) {
      updateOutputFields(secondsRemaining);
    } else {
      ringAlarm();
      secondsRemaining = 0;
    }
    secondsRemaining -= 1;
  }, 1000);
}

function toTimeString(totalTime) {
  let hours = Math.floor(totalTime / 3600);
  let minutes = Math.floor((totalTime % 3600) / 60);
  let seconds = totalTime - hours * 3600 - minutes * 60;
  return `${("00" + hours).slice(-2)}:${("00" + minutes).slice(-2)}:${(
    "00" + seconds
  ).slice(-2)}`;
}

function getEndTimestamp(seconds) {
  let currentTime = new Date().getTime();
  let futureTime = currentTime + seconds * 1000;
  let finalTime = new Date(futureTime).toTimeString().split(" ")[0];
  return `Be Back At ${finalTime}`;
}

function updateOutputFields(seconds) {
  let timeString = toTimeString(seconds);
  displayTimeLeft.textContent = timeString;
  displayTimeEnd.textContent = endTime;
}

function ringAlarm() {
  displayTimeLeft.textContent = "ALARM!";
}

timerControls.forEach((targetButton) =>
  targetButton.addEventListener("click", (e) => {
    let seconds = e.target.getAttribute("data-time");
    setBreakTime(seconds);
  })
);

customTime.addEventListener("input", (e) => {
  if (!isNaN(e.target.value)) {
    let seconds = e.target.value * 60;
    setBreakTime(seconds);
  }
});

customTime.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
  }
});
