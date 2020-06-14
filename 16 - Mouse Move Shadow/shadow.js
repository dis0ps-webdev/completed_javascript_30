const textOnPage = document.querySelector("h1");

function checkPosition(e) {
  let rect = textOnPage.getBoundingClientRect();
  let center = { x: rect.width / 2 + rect.left, y: rect.height / 2 + rect.top };
  let xScale = (2 * (center.x - e.clientX)) / center.x;
  let yScale = (2 * (center.y - e.clientY)) / center.y;

  textOnPage.style.textShadow = `${Math.round(10 * xScale)}px ${Math.round(
    10 * yScale
  )}px 0 rgba(0,0,0,1)`;
}

document.addEventListener("mousemove", checkPosition);
