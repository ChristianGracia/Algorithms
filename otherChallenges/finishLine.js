const game = {
  cardArray: [],
  diceArray: [],
  endArray: [],
  middleArray: [],

  roll: function() {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
  },

  diceClass: (DiceRoll = function(roll1, roll2) {
    (this.dice1 = roll1), (this.dice2 = roll2);
  }),

  rollDice: function() {
    let val = new DiceRoll(this.roll(), this.roll());
    this.diceArray[0] = val;
    console.log(this.diceArray);
  },

  cardClass: (GameMap = function(tileNumber, card, suit) {
    this.tileNumber = tileNumber;
    this.card = card;
    this.suit = suit;
  }),

  middleTiles: function() {
    for (let i = 0; i < 8; i++) {
      let tmp = new GameMap(i, ((i + 1) % 2) + 1, i % 4);
      this.middleArray.push(tmp);
    }
    for (let i = 0; i < 2; i++) {
      let tmp = new GameMap(i + 8, 0, 0);
      this.middleArray.push(tmp);
    }
    for (let i = 0; i < 12; i++) {
      let tmp = new GameMap(i + 10, (i % 3) + 11, i % 4);
      this.middleArray.push(tmp);
      console.log(tmp);
    }
  },

  endTiles: function() {
    for (let i = 0; i < 32; i++) {
      let tmp = new GameMap(i + 22, 3 + (i % 8), i % 4);
      this.endArray.push(tmp);
    }
  },

  shuffleTiles: function() {
    this.endTiles.sort(() => Math.random() - 0.5);
    console.log(this.endTiles);
  }
};

game.middleTiles();
game.endTiles();
game.shuffleTiles();

// game.rollDice();

// first use both dice on one marker, get moving ready first based on die value,
// come up with method that applys dice value to number, apply stop later

//unfinished
//console.clear()
