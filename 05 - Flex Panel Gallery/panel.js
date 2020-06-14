const panels = document.querySelectorAll(".panel");

function toggleOpen(e) {
  // event.target vs this: 'this' represents the element with the listener, whereas event.target can represent the child element
  this.classList.toggle("open");
}

for (let panel of panels) {
  panel.addEventListener("click", toggleOpen);
}
