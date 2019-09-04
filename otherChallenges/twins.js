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
  },
  checkArray: function() {
    this.intArray.forEach(e => {
      if (e == 0) {
        this.indexArray.push(this.intArray.indexOf(e));
        this.intArray.splice(this.intArray.indexOf(e), 1);

        console.log(e);
        if (this.indexArray.length == 2) {
          return 0;
        }
      }
    });
    console.log(this.indexArray);
  }
};

twins.randomNumber();
twins.fillArray();
twins.checkArray();
