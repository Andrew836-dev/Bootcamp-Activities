const dog = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        (this.raining ? console.log(this.noise) : null);
    }
}
const cat = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        (this.raining ? console.log(this.noise) : null);
    }
}

dog.makeNoise();
cat.makeNoise();

cat.raining = true;
cat.makeNoise();

function pandemonium() {
    (cat.raining && dog.raining ? console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!"): null)
}

pandemonium();
dog.raining = false;
pandemonium();