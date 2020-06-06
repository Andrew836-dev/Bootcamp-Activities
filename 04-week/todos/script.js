var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

init();

document.addEventListener('submit', function (event) {
    event.preventDefault();
    if (todoInput.value.trim() == "") {
        return;
    }
    else {
        todos.push(todoInput.value.trim());
        todoInput.value = "";
        renderTodos();
    }
});

document.addEventListener('click', function (event) {
    if (event.target.matches("button")) {
        // console.log(event.target.parentElement);
        var index = parseInt(event.target.parentElement.getAttribute("data-index"));
        todos.splice(index, 1);
        renderTodos();
    }
})

function init() {
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
        todos = storedTodos;
    }
    renderTodos();
}

function storeTodos() {
    console.log("storing");
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement('li');
        var btn = document.createElement('button');
        li.textContent = todos[i];
        btn.textContent = "Complete";
        li.setAttribute("data-index", i)
        todoList.append(li);
        li.append(btn);
    }
    storeTodos();
}
