const mysql = require("mysql");
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "abc123",

    database: "topsongs_db"
});

connection.connect(function (error) {
    if (error) throw error;
    console.log("Connection: " + connection.threadId);
    start();
});


function start() {
    const myQuery = "select songs.artist, albums.album, songs.title, songs.released, songs.ranking from albums inner join songs on songs.released = albums.released AND songs.artist = albums.artist AND songs.artist = ?";
    inquirer.prompt({
        message: "Which artist would you like to search for?",
        name: "searchTerm"
    }).then(({ searchTerm }) => {
        connection.query(myQuery, searchTerm, function (err, response) {
            if (err) throw err;
            response.forEach((song, index) => console.log(`${index + 1}.) Year: ${song.released} || Album Position: ${song.ranking} || Artist: ${song.artist} || Song: ${song.title} || Album: ${song.album}`));
            connection.end();
        });
    });
}