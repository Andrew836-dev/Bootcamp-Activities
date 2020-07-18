const vehicle = require("./vehicle");
const Vehicle = require("./vehicle");

class Car extends Vehicle {
    constructor(id, color, passengers) {
        super(id, 4, "Beep!");
        this.color = color;
        this.passengers = passengers;

        this.checkPassengers = function() {
            if (this.passengers.length > 4) {
                console.log("Too many passengers!");
            }
            else {
                console.log("Room for " + (4 - this.passengers.length) + " more!");
            }
        }
        this.useHorn = function() {
            console.log(this.sound);
        }
    }
}

const carPassengers = ["John Doe", "Clark Kent", "Bruce Wayne", "you"];
const testCar = new Car(1, "red", carPassengers);
testCar.useHorn();
testCar.checkPassengers();
testCar.printInfo();