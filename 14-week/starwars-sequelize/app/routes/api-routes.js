// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models/character");


// Routes
// =============================================================
module.exports = function (app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function (req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Character.findAll({
        where: { routeName: req.params.characters }
      }).then(function (data) {
        console.log(data);
        if (data.length) {
          [{dataValues}] = data;
          console.log(dataValues);
          res.json(dataValues);
        }
        else res.json(false);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
      Character.findAll({}).then(function (data) {
        res.json(data);
      });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function (req, res) {

    // Take the request...
    var character = req.body;

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = character.name.replace(/\s+/g, "").toLowerCase();
    console.log(routeName);
    character.routeName = routeName;
    // Then send it to the ORM to "save" into the DB.
    Character.create(character).then(function (data) {
      console.log(data);
      res.end();
    });

  });
};
