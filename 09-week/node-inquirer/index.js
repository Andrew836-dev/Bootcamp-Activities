var inquirer = require("inquirer");
var fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "userName"
        },
        {
            type: "checkbox",
            message: "What languages do you know?",
            name: "knownLanguage",
            choices: [
                "HTML",
                "CSS",
                "Javascript",
                "C++"
            ]
        },
        {
            type: "list",
            message: "What is your preferred method of communication?",
            name: "preferredCommunication",
            choices: [
                "E-mail",
                "Telephone",
                "AIM",
                "ICQ"
            ]
        }])
        .then(function(response){
            var fileName = response.userName.toLowerCase().split(' ').join('');
            fs.appendFile(`./${fileName}.json`, JSON.stringify(response) + "\n", "utf8", function(err) {
                if (err) {
                    console.log(err);
                }
            });
        });