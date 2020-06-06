var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var paused = false;
var mode = "working";

function init() {
  workMinutesInput.value = localStorage.getItem("work-timer");
  restMinutesInput.value = localStorage.getItem("rest-timer");
}

init();


function startTimer() {
  // Write code to start the timer here
  if (parseFloat(workMinutesInput.value) < 0){
    alert("positive numbers only please");
    workMinutesInput.value = 0;
    return;
  }
  else if (parseFloat(restMinutesInput.value) < 0) {
    alert("positive numbers only please");
    restMinutesInput.value = 0;
    return;
  }
  if (!paused) {
    clearInterval(interval);
    totalSeconds = statusSeconds();
  }
  paused = false;
  interval = setInterval(countdown, 1000)
  localStorage.setItem("work-timer", workMinutesInput.value);
  localStorage.setItem("rest-timer", restMinutesInput.value);
}


function countdown() {
  if (totalSeconds >= 0) {
    updateDisplay();
    totalSeconds--;
  }
  else {
    stopTimer();
    if (mode === "working") {
      alert("Time to stop working");
    }
    else {
      alert("Time to stop resting");
    }
  }
}

function updateDisplay() {
  minutesDisplay.textContent = formatMinutes();
  secondsDisplay.textContent = formatSeconds();
}

function formatSeconds() {
  var answer = totalSeconds - formatMinutes() * 60;
  if (answer < 10) {
    return "0" + answer.toString();
  }
  else {
    return answer;
  }
}

function formatMinutes() {
  var answer = Math.floor(totalSeconds / 60)
  if (answer > 9) {
    return answer;
  }
  else {
    return "0" + answer.toString();
  }
}


function pauseTimer() {
  clearInterval(interval);
  paused = true;
}

function stopTimer() {
  clearInterval(interval);
  totalSeconds = statusSeconds();
  updateDisplay();
}

function statusSeconds() {
  if (mode === "working") {
    return workMinutesInput.value * 60;
  }
  else {
    return restMinutesInput.value * 60;
  }
}

function onToggleClicked() {
  if (mode === "working") {
    mode = "resting";
  }
  else {
    mode = "working";
  }
  if (parseFloat(workMinutesInput.value) < 0){
    alert("positive numbers only please");
    workMinutesInput.value = 0;
  }
  else if (parseFloat(restMinutesInput.value) < 0) {
    alert("positive numbers only please");
    restMinutesInput.value = 0;
  }
  stopTimer();
}

pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
playButton.addEventListener("click", startTimer);
statusToggle.addEventListener("click", onToggleClicked);