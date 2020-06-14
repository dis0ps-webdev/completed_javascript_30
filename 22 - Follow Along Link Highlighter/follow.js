const allLinks = document.querySelectorAll("a");

//highlight is a span that following mouseover events;
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function toggleHighlight(e) {
  let targetLink = e.target;
  let targetPosition = targetLink.getBoundingClientRect();

  // Add scroll to ensure accurate positioning when page is moved
  highlight.style.left = `${targetPosition.left + window.scrollX}px`;
  highlight.style.top = `${targetPosition.top + window.scrollY}px`;
  highlight.style.width = `${targetPosition.width}px`;
  highlight.style.height = `${targetPosition.height}px`;
}

allLinks.forEach((link) => {
  link.addEventListener("mouseover", toggleHighlight);
});
