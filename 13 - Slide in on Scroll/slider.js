const slideImages = document.querySelectorAll(".slide-in");

function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function isInView(element) {
  let bounds = element.getBoundingClientRect();
  let viewHeight = window.innerHeight || document.documentElement.clientHeight;
  let viewWidth = window.innerWidth || document.documentElement.clientWidth;

  return bounds.top >= 0 && bounds.bottom <= viewHeight;
}

function checkImages(element) {
  slideImages.forEach((image) => {
    if (isInView(image)) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

document.addEventListener("scroll", debounce(checkImages));
