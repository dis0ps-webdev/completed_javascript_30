const navElement = document.querySelector("nav#main");
const logo = document.querySelector(".logo");
const navOriginalPosition = navElement.offsetTop;

function makeSticky() {
  if (navElement.offsetTop < window.pageYOffset) {
    navElement.classList.add("sticky");
    logo.style.maxWidth = "100%";
  }
  if (window.pageYOffset < navOriginalPosition) {
    navElement.classList.remove("sticky");
    logo.style.maxWidth = "0";
  }
}

window.addEventListener("scroll", makeSticky);
