const checkBoxes = Array.from(
  document.querySelectorAll("input[type=checkbox]")
);

const clickLIFO = [];

function handleClick(e) {
  trackClicks(checkBoxes.indexOf(e.target));
  if (e.shiftKey) {
    if (clickLIFO.length == 2) {
      checkSelection(clickLIFO[0], clickLIFO[1]);
    }
  }
}

function checkSelection(start, end) {
  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
  }

  for (let i = start; i <= end; i++) {
    checkBoxes[i].checked = true;
  }
}

function trackClicks(elementIndex) {
  clickLIFO.push(elementIndex);

  if (clickLIFO.length > 2) {
    clickLIFO.shift();
  }
}

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleClick);
});
