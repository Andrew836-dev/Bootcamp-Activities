function Algo() {}

Algo.prototype.reverse = function(str) {
    return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function(str) {
    return str.split("").reverse().join("") === str;
};

Algo.prototype.capitalize = function(str) {
    let wordArray = str.split(" ").map(word => {
        let splitWord = word.split("");
        splitWord[0] = splitWord[0].toUpperCase();
        return splitWord.join("")
    })
    return wordArray.join(" ");
};

module.exports = Algo;
