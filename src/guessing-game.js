

class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max
    }

    guess() {
        this.candidate=this.min + Math.round((this.max-this.min)/2);
        return this.candidate
    }

    lower() {
        this.max = this.candidate;
    }

    greater() {
        this.min = this.candidate;
    }
}

module.exports = GuessingGame;
