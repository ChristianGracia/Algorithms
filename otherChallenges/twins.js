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
    let counter = 1000;

    for (var i = 0; i < counter; i++) {
      for (var j = 0; j < counter; j++) {
        if (this.intArray[i] + this.intArray[j] == 0) {
          console.log("pair found");
          console.log(this.intArray[i] + " " + this.intArray[j]);
          console.log(
            this.intArray.indexOf(this.intArray[i]) +
              " " +
              this.intArray.indexOf(this.intArray[j])
          );
          counter = 0;
        }
      }
      this.intArray.splice(i, 1);
      counter--;
    }
  }
};

twins.randomNumber();
twins.fillArray();
twins.checkArray();
