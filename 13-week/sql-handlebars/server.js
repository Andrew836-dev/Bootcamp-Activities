const mysql = require("mysql");
const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "abc121",
    database: "wishes_db"
});

connection.connect(function (error) {
    if (error) {
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("Connected as : " + connection.threadId);
});

app.get("/", function(request, response){
    connection.query("SELECT * FROM wishes", function (error, data){
        if (error) throw error;

        return response.render("index",{wishes: data})
    });
});

app.post("/", function(request, response){
    connection.query("INSERT INTO wishes SET ?", request.body, function(error, data){
        if (error) throw error;
        response.redirect("/");
    });
});

app.listen(PORT, function() {
    console.log("Server listening at http://localhost:" + PORT);
});