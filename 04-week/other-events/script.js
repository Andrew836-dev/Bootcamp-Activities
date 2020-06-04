var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

function keyPress(event) {
  var keyPress = event.key;
  var keyCode = event.code;
  document.querySelector('#key').textContent = keyPress;
  document.querySelector('#code').textContent = keyCode;
  document.querySelector('#status').textContent = "KEYDOWN Event";
}

function keyup(event) {
  document.querySelector('#status').textContent = "KEYUP Event";
}

function click(event) {
  var target = event.target.textContent;
  var x = event.clientX;
  var y = event.clientY;
  document.querySelector('#target').textContent = target;
  document.querySelector('#x').textContent = x;
  document.querySelector('#y').textContent = y;
}

eventType.addEventListener('change', toggleDisplay);

document.addEventListener('keydown', keyPress);
document.addEventListener('keyup', keyup);
document.addEventListener('click', click);