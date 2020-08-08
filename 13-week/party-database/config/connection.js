const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "parties_db",
    user: "root",
    password: "abc121"
});

connection.connect((err) => {
    if (err) {
        console.log(err.stack);
    }
    else console.log("Connected : " + connection.threadId);
});

module.exports = connection;