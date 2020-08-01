const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "abc123",

    database: "topsongs_db"
});

connection.connect(err => {
    if (err) throw err;
    start();
});

function start() {
    inquirer.prompt({
        message: "What would you like to search for?",
        type: "list",
        choices: [
            "Artist name",
            "Artist with more than one entry",
            "EXIT"],
        name: "selection"
    }).then(({ selection }) => {
        console.clear();
        switch (selection) {
            case "Artist name":
                artistSearch();
                break;
            case "Artist with more than one entry":
                multiSearch();
                break;
            default:
                connection.end();
        }
    });
}

function artistSearch() {
    inquirer.prompt({
        message: "Which artist do you want to search for?",
        name: "artistName"
    }).then(({ artistName }) => {
        connection.query("SELECT ranking, title, released FROM songs WHERE ?", [{ artist: artistName }], displayArtistResults);
    });
}
function multiSearch() {
    connection.query()
    start();
}

function displayArtistResults(error, response) {
    if (error) throw error;
    console.log("-".repeat(80));
    response.forEach(({ ranking, title, released }) => {
        console.log(`${ranking}${" ".repeat(4 - ranking.toString().length)}|${title}${" ".repeat(70 - title.length)}|${released}`);
    });
    console.log("-".repeat(80));
    console.log(`${response.length} entries found.`);
    console.log("-".repeat(80));
    start();
}
