const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
// name, location, github, linkedin

const asyncWriteFile = util.promisify(fs.writeFile);
const questionsToAsk = [{
    message: "What is your name?",
    name: "userName"
}, {
    message: "Where are you now?",
    name: "location"
},
{
    message: "What is your github URL?",
    name: "githubURL"
}
]

// ask questions to get info
function askQuestions() {
    inquirer.prompt(questionsToAsk).then(function ({ userName, location, githubURL }) {
        const htmlFile = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
            <h1>${userName}</h1>
            <a href="${githubURL}">${githubURL}</a>
            <p>${location}</p>
                
            </body>
            </html>`
        asyncWriteFile("index.html", htmlFile).then(() => console.log("success"))
    });
}
// parse data into a html file
askQuestions();