const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const locationData = [];

const searchbox = document.querySelector(".search");
const suggestionList = document.querySelector(".suggestions");

function getJSON(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  });
}

function matchLocation(fragment, location) {
  let re = new RegExp(`^${fragment}`, "gi");
  return re.test(location.state) || re.test(location.city);
}

function suggestLocation(typedText) {
  return locationData.filter((place) => matchLocation(typedText, place));
}

function displaySuggestion(suggestionArray) {
  let outputHTML = "";
  suggestionArray.map(
    (place) => (outputHTML += `<li>${place.city}, ${place.state}</li>`)
  );
  document.querySelector(".suggestions").innerHTML = outputHTML;
}

//Promises are async by nature, use the 'then' syntax at call time
getJSON(endpoint).then((data) => locationData.push(...data));

searchbox.addEventListener("keyup", (e) =>
  displaySuggestion(suggestLocation(e.target.value))
);

searchbox.addEventListener("change", (e) =>
  displaySuggestion(suggestLocation(e.target.value))
);

suggestionList.addEventListener("click", (e) => {
  searchbox.value = e.target.textContent;
});
