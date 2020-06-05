var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");


var people = [{ name: "Bob" }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  event.preventDefault();
  console.log(event);
  // Use event delegation to handle when the user clicks "edit"
  if (event.target.matches("button") && event.clientX !== 0) {
    currentId = parseInt(event.target.parentElement.id);
    modalNameEl.textContent = people[currentId].name;
    modalEl.style.display = "block";
    var description = people[currentId].description
    console.log(people[currentId]);
    if (description) {
      descriptionEl.value = description;
    }
    else {
      descriptionEl.value = "";
    }
  }
  // if (event.target)
}

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
});
closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);
peopleListEl.addEventListener("click", handleClick);