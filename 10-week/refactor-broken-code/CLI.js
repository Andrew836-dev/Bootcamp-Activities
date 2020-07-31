var WeatherAdmin = require("./WeatherAdmin");

// Hold the value whether someone is an "admin" or "user"
var loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
var userName = process.argv[3];

// And they will need to provide a "location"
var userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
var myAdmin = new WeatherAdmin();

let standardError = `Please use "node cli user <your name> <city name>"`

if (loginType === "admin") {
  myAdmin.getData();
}
else if (loginType === "user" && userLocation) {
  myAdmin.newUserSearch(userName, userLocation);
}
else {
  console.log(standardError);
}
