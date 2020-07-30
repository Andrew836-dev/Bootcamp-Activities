const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "abc123",
    database: "playlist_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM songs WHERE genre=?",["rock"], function (error, response) {
        if (error) throw error;
        response.forEach(({id, title, artist, genre}) => console.log(`${id} | ${title} | ${artist} | ${genre}`));
        connection.end();
    });
});