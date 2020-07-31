const Word = require("./lib/Word");
const inquirer = require("inquirer");

var guesses = 0;

function gameStart(wordIn) {
    const currentWord = new Word(wordIn);
    guesses = 10;
    askForLetter(currentWord);
}

function askForLetter(wordIn) {
    console.log(wordIn.toString());
    console.log(`${guesses} guesses remaining!`);
        inquirer.prompt({
            message: "Guess a letter/number!",
            name: "typedLetter"
        }).then(({ typedLetter }) => {
            console.log(typedLetter);
            if (wordIn.guessLetter(typedLetter[0])){
                console.log("Correct!")
            }
            else {
                console.log("Incorrect!")
                guesses--;
            }
            if(wordIn.guessedCorrectly()) {
                console.log(`Grats! You got it! With ${guesses} guesses remaining.`)
            }
            else if (guesses < 1) {
                console.log("Game over! You ran out of guesses.");
            }
            else {
                askForLetter(wordIn);
            }
        });
}

gameStart("John");