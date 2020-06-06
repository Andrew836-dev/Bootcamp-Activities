var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        if (todoInput.value == "") {
            return;
        }
        else {
            todos.push(todoInput.value);
            todoInput.value = "";
            renderTodos();
        }
    }
});

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement('li');
        li.textContent = todos[i];
        todoList.append(li);
    }
}
