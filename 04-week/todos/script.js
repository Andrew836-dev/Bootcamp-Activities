var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// initalise the list on page load
init();

// listen for a submit event
document.addEventListener('submit', function (event) {
    // prevent the page from refreshing
    event.preventDefault();
    // check if the input has any useful data
    if (todoInput.value.trim() == "") {
        // if there's no text, end the function
        return;
    }
    else {
        // add new entry to array
        todos.push(todoInput.value.trim());
        // clear the input field
        todoInput.value = "";
        // update the display
        renderTodos();
    }
});

// listen for clicks
document.addEventListener('click', function (event) {
    // if the click target is a button, continue
    if (event.target.matches("button")) {
        // turn the data-index attribute into a number
        var index = parseInt(event.target.parentElement.getAttribute("data-index"));
        // remove the entry at that index
        todos.splice(index, 1);
        // update the display
        renderTodos();
    }
})

// retrieves from local storage
function init() {
    // JSON used to retrieve an array from local storage
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    // if storedTodos exists...
    if (storedTodos) {
        // update the main array with the stored data
        todos = storedTodos;
    }
    // update the display
    renderTodos();
}

// function to store the array into local storage
function storeTodos() {
    // using JSON to turn the array into a single string
    localStorage.setItem("todos", JSON.stringify(todos));
}

// function to update the display
function renderTodos() {
    // removes everything inside the list
    todoList.innerHTML = "";
    // updates the counter to match the number of items in the array
    todoCountSpan.textContent = todos.length;
    // loop to add everything in the array to the list
    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement('li');
        var btn = document.createElement('button');

        // setting parameters of the li object
        li.textContent = todos[i];
        li.setAttribute("data-index", i)
        // add the li object to the view
        todoList.append(li);

        // setting parameters of the button object
        btn.textContent = "Complete";

        // add the button to the current list item
        li.append(btn);
        
        // return to top of loop
    }
    // save list to local storage
    storeTodos();
}
