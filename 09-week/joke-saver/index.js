const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios
  .get("https://icanhazdadjoke.com/", config)
  .then(res => appendFileAsync("jokes.txt", res.data.joke + "\n", "utf8"))
  .then(() => readFileAsync("jokes.txt", "utf8")
  .then(jokes => console.log(jokes)))
  .catch(err => console.log(err));