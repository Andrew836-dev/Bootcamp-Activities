const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = animalJSON.filter(animal => animal.species == "dog");
  const cats = animalJSON.filter(animal => animal.species == "cat");

  // animalJSON.forEach(element => {
  //   if (element.species == "cat"){
  //     // cats.push(element);
  //   }
  //   else {
  //     dogs.push(element);
  //   }
  // });
  
  fs.writeFile("dogs.json", JSON.stringify(dogs, null, '  '), err => {
    if (err) {
      throw err;
    }
  });
  fs.writeFile("cats.json", JSON.stringify(cats, null, '  '), err => {
    if (err) {
      throw err;
    }
  });
});
