const Letter = require("./Letter");

class Word {
    constructor(word) {
        this.letterList = word.split('').map(letter => new Letter(letter));
    }

    toString() {
        return this.letterList.join('');
    }

    guessLetter(guess) {
        let guessedLetters = this.letterList.filter(letter => letter.guess(guess));
        return guessedLetters.length > 0;
    }

    guessedCorrectly() {
        return this.letterList.every(letter => letter.visible);
    }
}

module.exports = Word;