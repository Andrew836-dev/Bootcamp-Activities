const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "abc123",
    database: "popquiz_db"
});

connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM quizzy", function (error, response) {
        if (error) throw error;
        response.forEach(({words}) => console.log(words));
        connection.end();
    });

});