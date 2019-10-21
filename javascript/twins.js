var pairCounter = 0;
const twins = {
  intArray: [],
  indexArray: [],
  randomNumber: function() {
    let random = Math.floor(Math.random() * 2000) - 1000;
    return random;
  },
  fillArray: function() {
    for (let i = 0; i < 10000; i++) {
      this.intArray.push(this.randomNumber());
    }
    console.log("array length = " + this.intArray.length);
  },
  checkArray: function() {
    let counter = 10000;

    for (var i = 0; i < counter; i++) {
      for (var j = 1; j < i + 1; j++) {
        if (this.intArray[i] + this.intArray[j] == 0) {s
          pairCounter++;
        }
      }
      this.intArray.splice(this.intArray.indexOf(this.intArray[i]), 1);
      counter--;
    }
    console.log("total pairs = " + pairCounter);
  }
};

twins.randomNumber();
twins.fillArray();
twins.checkArray();
