const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryUrl)
    .then(response => {
      const repoNames = response.data.map(repo => repo.name);
      fs.writeFile("repos.txt", repoNames.join("\n"), "utf8", function(err) {
        if (err) {
          throw err;
        }
        console.log(`Successfully wrote ${repoNames.length} repos to repos.txt!`);
      })
      });
  });
