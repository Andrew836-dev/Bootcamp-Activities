const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "abc121",

    database: "seinfeld_db"
});

const app = express();

const PORT = process.env.PORT || 8080;

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected : " + connection.threadId);
});
app.get("/", function (request, response) {
    response.send("<h1>Info about Seinfeld cast</h1><p><a href='/cast'>View cast</a></p><p><a href='/coolness-chart'>View cast ranked by coolness</a></p>")
})

app.get("/cast", function (request, response) {
    let html = "<h1>No response from server.<h1>"
    connection.query("SELECT * FROM cast", function (error, cast) {
        if (error) {
            response.send(html);
            throw error;}
        html = "<table><tr><th>ID</th><th>Character</th><th>Actor</th><th>Attitude</th><th>Coolness</th></tr>";
        cast.forEach(castMember => {
            html += `<tr><td>${castMember.id}</td><td>${castMember.character_name}</td><td>${castMember.actor_name}</td><td>${castMember.attitude}</td><td>${castMember.coolness}</td>`;
        });
        html += "</table>"
        response.send(html);
    });
});

app.get("/coolness-chart", function(request, response) {
    let html = "<h1>some text or something</h1>";
    connection.query("SELECT * FROM cast ORDER BY coolness DESC", function(err, cast) {
        if (err) {
            response.send(html);
            throw err;
        }
        html = "<table><tr><th>ID</th><th>Character</th><th>Actor</th><th>Attitude</th><th>Coolness</th></tr>";
        cast.forEach(castMember => {
            html += `<tr><td>${castMember.id}</td><td>${castMember.character_name}</td><td>${castMember.actor_name}</td><td>${castMember.attitude}</td><td>${castMember.coolness}</td>`;
        });
        html += "</table>"
        response.send(html)
    });
});

app.get("/attitude-chart/:att", function(req, res) {
    let html = "<h1>Actors with an Attitude of " + req.params.att + "</h1>";
    connection.query("Select * from cast where attitude = ?", req.params.att, function (err, cast) {
        if (err) {
            res.send("Something went wrong");
            throw err;
        }
        html += "<table><tr><th>ID</th><th>Character</th><th>Actor</th><th>Attitude</th><th>Coolness</th></tr>";
        cast.forEach(castMember => {
            html += `<tr><td>${castMember.id}</td><td>${castMember.character_name}</td><td>${castMember.actor_name}</td><td>${castMember.attitude}</td><td>${castMember.coolness}</td>`;
        });
        html += "</table>"
        res.send(html);
    });
})

app.listen(PORT, function () {
    console.log("Listening at localhost:" + PORT);
})