var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var warningSeconds = 5;
var tag = document.createElement("h1");
var divTag = document.createElement("div");
var pTag = document.createElement("p");

// document setup
document.body.appendChild(tag);
document.body.appendChild(divTag);
divTag.appendChild(pTag);
tag.setAttribute("style", "text-align: center;");
pTag.setAttribute("style", "text-align: center;");

//start the countdown
prepareRead();

function prepareRead() {
  // Create the countdown timer.
  var warningTimer = setInterval(function () {
    tag.textContent = "Beginning Speed read in " + warningSeconds;
    warningSeconds--;
    if (warningSeconds < 0) {
      clearInterval(warningTimer);
      speedRead();
    }
  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  tag.textContent = "Read away!";
  var poemArray = poem.split(" ");
  var i = 0;
  var readTimer = setInterval(function () {
    pTag.textContent = poemArray[i];
    if (i < poemArray.length) {
      i++;
    }
    else {
      clearInterval(readTimer);
      pTag.textContent = "Finished!";
    }
  }, 1000);


}
