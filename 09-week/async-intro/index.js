const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const dog = await readFileAsync("dog.json", "utf8");
    const cat = await readFileAsync("cat.json", "utf8");
    const hamster = await readFileAsync("hamster.json", "utf8");
    const goldfish = await readFileAsync("goldfish.json", "utf8");

    const animalJSON = [hamster, cat, goldfish, dog].map(JSON.parse)

    await writeFileAsync("combined.json", JSON.stringify(animalJSON, null, 2), "utf8");
  } catch(err) {
    console.log(err);
  }
}

combineAnimals();
