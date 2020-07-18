var vehicle = require("./vehicle");
const Vehicle = require("./vehicle");

class Boat extends Vehicle {
    constructor(id, crew){
        super(id, 0, "Toot!");
        this.crew = crew;

        this.crewSoundOff = function() {
            // console.log(typeof this.crew);
            if (typeof this.crew == "object") {
                this.crew.forEach(member => console.log(`${member} reporting for duty!`));
            }
            else {
                console.log(this.crew);
            }
        }
        this.useHorn = function() {
            console.log(this.sound);
        }
    }
}

const testBoat = new Boat(2, ["John Smith"]);
testBoat.crewSoundOff();
testBoat.useHorn();
testBoat.printInfo();

const arrayBoat = new Boat(5, ["John Smith", "Clark Kent", "Bruce Wayne"]);
arrayBoat.crewSoundOff();