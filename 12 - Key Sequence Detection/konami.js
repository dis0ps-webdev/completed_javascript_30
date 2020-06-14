const keyCombo = [];

function addKey(keyCode) {
  keyCombo.push(keyCode);
  if (keyCombo.length > 10) {
    keyCombo.shift();
  }
  console.log(keyCombo);
  if (keyCombo.join("") == "38384040373937396665") {
    console.log("KONAMI!!!");
  }
}

document.addEventListener("keydown", (e) => addKey(e.keyCode));
