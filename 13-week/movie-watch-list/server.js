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
    database: "moviePlannerDB"
});

connection.connect(function (error) {
    if (error) {
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("Connected as : " + connection.threadId);
});

app.get("/", function(request, response) {
    connection.query("SELECT * FROM movies", function(error, data) {
        if (error) throw error;
        // console.log(data);
        response.render("index", {movies: data});
    });
});

app.post("/movies", function (req, res) {
    // console.log(req.body);
    connection.query("INSERT INTO movies SET ?", req.body, function(error) {
        if (error) throw error;
        res.redirect("/");
    });
});

app.put("/movies/:id", function (req, res) {
    console.log(req.body, req.params);
    connection.query("UPDATE movies SET ? WHERE ?", [req.body, req.params], function(error, data){
        if (error) {
            return res.status(500).end();
        }
        else if (data.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

app.delete("/movies/:id", function (req, res) {
    connection.query("DELETE FROM movies WHERE ?", req.params, function(error, data) {
        if (error) {
            return res.status(500).end();
        }
        else if(data.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

app.listen(PORT, function() {
    console.log("Server listening at http://localhost:" + PORT);
});