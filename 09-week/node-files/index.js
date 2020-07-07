var fs = require('fs');

var desiredInput = process.argv.slice(2);
for (var i = 0; i < desiredInput.length; i++) {
    fs.appendFile("./log.txt", desiredInput[i] + "\n", function (error) {
        if (error) {
            return console.log(error);
        }
    });
}