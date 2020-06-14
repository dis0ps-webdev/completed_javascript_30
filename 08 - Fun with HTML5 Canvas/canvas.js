const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

let mouseDown = false;
let hue = 1;
let hueIncrease = true;
let lastCoords = {};

function setupCanvas() {
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
}

function getMousePosition(e) {
  let position = {
    x: e.offsetX,
    y: e.offsetY,
  };

  return position;
}

function startDrawing(e) {
  let coords = getMousePosition(e);

  if (lastCoords.x != 0 && lastCoords.y != 0) {
    ctx.beginPath();
    ctx.moveTo(lastCoords.x, lastCoords.y);
    ctx.lineTo(coords.x, coords.y);

    ctx.lineWidth = hue;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    setHue();

    ctx.stroke();
  }
}

function setHue() {
  if (hue >= 360 || hue < 1) {
    hueIncrease = !hueIncrease;
  }
  if (hueIncrease) {
    hue++;
  } else {
    hue--;
  }
}

function stopDrawing() {
  mouseDown = false;
  lastCoords = { x: 0, y: 0 };
  hue = 1;
}

setupCanvas();

canvas.addEventListener("mousedown", () => (mouseDown = true));
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

canvas.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    startDrawing(e);
    lastCoords = getMousePosition(e);
  }
});
