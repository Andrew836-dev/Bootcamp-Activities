// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    console.log(req.body);
    res.send("index.html");
  })
  // Get all chirps
  app.get("/api/all", function (req, res) {
    console.log(req.body);
    connection.query("SELECT * FROM chirps", function (err, data) {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });
  // Add a chirp

  app.post("/api/new", function (req, res) {
    console.log(req.body);
    connection.query("INSERT INTO chirps SET ?", req.body, function (err, data) {
      // console.log(err, data);
      if (err) res.status(500).end();
      else if (data.affectedRows === 0) res.status(404).end();
      else res.status(200).end();
    })
  });


};
