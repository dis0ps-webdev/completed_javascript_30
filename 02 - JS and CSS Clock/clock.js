setInterval(moveHands, 1000);

function moveHands() {
  const now = new Date();
  const targetSeconds = document.querySelector(".second-hand");
  const targetMinutes = document.querySelector(".min
  -hand");
  const targetHours = document.querySelector(".hour-hand");

  let secondsRotation = ((now.getSeconds() / 60) * 360) + 90;
  let minutesRotation = ((now.getMinutes() / 60) * 360) + 90;
  let hoursRotation = ((now.getHours() / 12) * 360) + 90;
  
  targetSeconds.style.transform = `rotate(${secondsRotation}deg)`;
  targetMinutes.style.transform = `rotate(${minutesRotation}deg)`;
  targetHours.style.transform = `rotate(${hoursRotation}deg)`;
}
