class Letter{
    constructor(letter) {
        this.name = letter;
        this.visible = /\W/g.test(this.name);
    }

    toString() {
        if(this.visible) {
            return this.name;
        }
        else {
            return "_";
        }
    }

    guess(input) {
        if (!this.visible) {
            return this.visible = input.toLowerCase() === this.name.toLowerCase();
        }
        return false;
    }

    getSolution() {
        return this.name;
    }
}
module.exports = Letter;