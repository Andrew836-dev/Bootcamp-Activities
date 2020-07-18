class Character {
  constructor(name, strength, hitpoints) {
    this.Name = name;
    this.Strength = strength;
    this.Hitpoints = hitpoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.Name} are as following:`);
    console.log(`Each attack will do ${this.Strength} damage.`);
    console.log(`${this.Name} has ${this.Hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.Hitpoints < 1) {
      console.log(`${this.Name} has been defeated!`);
      return false;
    }
    else return true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`${opponent.Name} was attacked by ${this.Name}, dealing ${this.Strength} damage!`);
    // Then, change the opponent's hitPoints to reflect this
    opponent.Hitpoints -= this.Strength;
  }
}

// Create two unique characters using the "character" class

const korgath = new Character("Korgath", 20, 211);
const ming = new Character("Ming", 15, 300);

// Create an interval that alternates attacks every 2000 milliseconds
let korgathTurn = true;
let timerID = setInterval(() => {
  if (!korgath.isAlive() || !ming.isAlive()) {
    clearInterval(timerID);
    console.log("Game over!");
  }
  else if (korgathTurn) {
    korgath.attack(ming);
    ming.printStats();
    korgathTurn = false;
  }
  else {
    ming.attack(korgath);
    korgath.printStats();
    korgathTurn = true;
  }
}, 2000);