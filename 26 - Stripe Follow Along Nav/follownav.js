const navLinks = Array.from(document.querySelectorAll(".cool > li"));
const ddBackground = document.querySelector(".dropdownBackground");
var test = "";

function moveMenu(e) {
  let targetMenu = e.currentTarget;
  let targetPosition = targetMenu.getBoundingClientRect();

  let targetContent = targetMenu.querySelector(".dropdown");
  let contentSize = targetContent.getBoundingClientRect();

  ddBackground.style.left = `${contentSize.left}px`;
  ddBackground.style.top = `${contentSize.top - targetPosition.top}px`;
  ddBackground.style.width = `${contentSize.width}px`;
  ddBackground.style.height = `${contentSize.height}px`;
}

function showMenu(e) {
  let targetMenu = e.currentTarget;
  ddBackground.classList.add("open");
  targetMenu.classList.add("trigger-enter");
  setTimeout(() => {
    if (targetMenu.classList.contains("trigger-enter")) {
      targetMenu.classList.add("trigger-enter-active");
    }
  }, 150);
}

function hideMenu(e) {
  let targetMenu = e.currentTarget;
  ddBackground.classList.remove("open");
  targetMenu.classList.remove("trigger-enter");
  targetMenu.classList.remove("trigger-enter-active");
}

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    showMenu(e);
    moveMenu(e);
  });
  link.addEventListener("mouseleave", hideMenu);
});
