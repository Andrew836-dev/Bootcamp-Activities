const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const TV = function () {
};

// Find a tv show actor
TV.prototype.findActor = function (actorName) {
  const URL = "http://api.tvmaze.com/search/people?q=" + actorName;

  axios.get(URL).then(response => {
    const personData = response.data[0].person;
    const showData = [
      "Name: " + personData.name,
      "Birthday: " + personData.birthday,
      "Gender: " + personData.gender,
      "Country: " + personData.country.name,
      "TV Maze URL: " + personData.url,
      "-".repeat(60),
      "\n"
    ].join("\n\n");
    // console.log(response.data[0].person);
    fs.appendFile("log.txt", showData, err => {
      if (err) throw err;

      console.log(showData);
    });
  });
}

// Find a tv show
TV.prototype.findShow = function (show) {
  const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

  axios.get(URL).then(response => {
    const showData = [
      "Show: " + response.data.name,
      "Genre(s): " + response.data.genres.join(", "),
      "Rating: " + response.data.rating.average,
      "Network: " + response.data.network.name,
      "Summary: " + response.data.summary,
      "-".repeat(60)
    ].join("\n\n");

    fs.appendFile("log.txt", showData, err => {
      if (err) throw err;

      console.log(showData);
    });
  });
};

module.exports = TV;
