function listenKeyPress(e) {
  const targetSound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const targetKey = document.querySelector(`div[data-key="${e.keyCode}"]`);

  showKeyPressed(targetKey);
  playSample(targetSound);
}

function showKeyPressed(targetKey) {
  if (targetKey != null) {
    targetKey.classList.add("playing");
    setTimeout(() => {
      targetKey.classList.remove("playing");
    }, 100);
  }
}

function playSample(targetSound) {
  if (targetSound != null) {
    new Audio(targetSound.src).play();
  }
}

document.addEventListener("keydown", listenKeyPress);
