function changeVariable(e) {
  let newValue = e.target.value;
  if (e.target.id != "base") 
  {
    newValue += "px";
  }
  document.documentElement.style.setProperty(`--${e.target.id}`, `${newValue}`);
}

const spacingSlider = document.getElementById("spacing");
const blurSlider = document.getElementById("blur");
const basePicker = document.getElementById("base");

spacingSlider.onchange = changeVariable;
blurSlider.onchange = changeVariable;
basePicker.onchange = changeVariable;
