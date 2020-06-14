const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const itemField = document.querySelector("input[name=item]");
const deleteButton = document.querySelector("#delete");
const checkAllButton = document.querySelector("#check-all");
const uncheckAllButton = document.querySelector("#uncheck-all");
const storageId = "itemList";
const items = [];

function loadItems() {
  if (storageId in localStorage) {
    let savedItems = JSON.parse(localStorage.getItem(storageId));
    items.push(...savedItems);
  }
}

function saveItems(item) {
  let objItem = {
    text: item,
    checked: false,
  };
  items.push(objItem);
  localStorage.setItem(storageId, JSON.stringify(items));
}

function displayItems() {
  itemsList.innerHTML = "";
  items.forEach((item) => {
    let listItem = document.createElement("li");

    // keeping it simple, we can use data attributes to utilize dataset in event delegation
    listItem.innerHTML = `<input type="checkbox" id=${item.text} name=${
      item.text
    } ${item.checked ? "checked" : ""}>`;
    listItem.innerHTML += `<label for="${item.text}">${item.text}</label>`;

    itemsList.appendChild(listItem);
  });
}

function recordClick(e) {
  let arrItems = Array.from(itemsList.querySelectorAll("input[type=checkbox]")); // in lieu of target.dataset.index, need to create index ourselves
  let clickedCheckbox = e.target.closest("input");
  if (clickedCheckbox) {
    let index = arrItems.indexOf(clickedCheckbox);
    items[index].checked = !items[index].checked;
  }
  localStorage.setItem(storageId, JSON.stringify(items));
}

function bulkClick(value) {
  let arrItems = Array.from(itemsList.querySelectorAll("input[type=checkbox]")); // in lieu of target.dataset.index, need to create index ourselves
  arrItems.forEach((item) => (item.checked = value));
}

addItems.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from refreshing page
  saveItems(itemField.value);
  displayItems();
  addItems.reset(); //reset entire form
});

window.addEventListener("load", () => {
  loadItems();
  displayItems();
});

itemsList.addEventListener("click", (e) => {
  recordClick(e); //event delegation, allowing propagation of events through parent element
});

deleteButton.addEventListener("click", () => {
  localStorage.removeItem(storageId);
  items.length = 0;
  loadItems();
  displayItems();
});

checkAllButton.addEventListener("click", () => bulkClick(true));
uncheckAllButton.addEventListener("click", () => bulkClick(false));
