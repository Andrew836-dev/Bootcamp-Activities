var myMath = require("./maths.js");

var operation = process.argv[2];
var numOne = process.argv[3];
var numTwo = process.argv[4];

switch (operation) {
    case "sum":
        console.log(myMath.add(numOne, numTwo));
        break;
    case "difference":
        console.log(myMath.sub(numOne, numTwo));
        break;
    case "product":
        console.log(myMath.mult(numOne, numTwo));
        break;
    case "quotient":
        console.log(myMath.div(numOne, numTwo));
        break;
    default:
        break;
}