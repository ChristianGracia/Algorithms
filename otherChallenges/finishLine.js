var readlineSync = require("readline-sync");
var turnCounter = 0;

const game = {
  cardArray: [],
  diceArray: [],
  endArray: [],
  middleArray: [],
  suitArray: ["♠", "♡", "♢", "♣"],

  roll: function() {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
  },

  diceClass: (DiceRoll = function(roll1, roll2) {
    this.dice1 = roll1;
    this.dice2 = roll2;
  }),

  rollDice: function() {
    let val = new DiceRoll(this.roll(), this.roll());
    this.diceArray = val;
    var playerMove = readlineSync.question(
      "Player " +
        ((turnCounter % 1) + 1) +
        "        " +
        "rolls = red: " +
        JSON.parse(this.diceArray.dice1) +
        ", black: " +
        JSON.parse(this.diceArray.dice2) +
        "\n" +
        "Which peice(s) would you like to move?"
    );
    console.log(this.diceArray);
  },

  cardClass: (GameMap = function(tileNumber, card, suit) {
    this.tileNumber = tileNumber;
    this.card = card;
    this.suit = suit;
  }),

  middleTiles: function() {
    //ace and twos
    for (let i = 0; i < 8; i++) {
      let tmp = new GameMap(i, ((i + 1) % 2) + 1, this.suitArray[i % 4]);
      this.middleArray.push(tmp);
    }
    //jokers
    for (let i = 0; i < 2; i++) {
      let tmp = new GameMap(i + 8, 0, 0);
      this.middleArray.push(tmp);
    }
    //jack queen kings
    for (let i = 0; i < 12; i++) {
      let tmp = new GameMap(i + 10, (i % 3) + 11, this.suitArray[i % 4]);
      this.middleArray.push(tmp);
    }
  },

  endTiles: function() {
    for (let i = 0; i < 32; i++) {
      let tmp = new GameMap(i + 22, 3 + (i % 8), this.suitArray[i % 4]);
      this.endArray.push(tmp);
    }
  },

  addTiles: function() {
    //randomize
    this.endArray.sort(() => Math.random() - 0.5);
    this.middleArray.sort(() => Math.random() - 0.5);

    //take beginning and end tiles
    let beginningTiles = this.endArray.splice(0, 3);
    let endTiles = this.endArray.splice(0, 3);

    //push end tiles
    this.cardArray = [...this.middleArray, ...this.endArray];

    //randomize again
    this.cardArray.sort(() => Math.random() - 0.5);

    //add beginning and end tiles
    this.cardArray.unshift(...beginningTiles);
    this.cardArray.push(...endTiles);
  },
  //display game board
  displayGame: function() {
    console.clear();
    var gameString = "";
    for (var i = 0; i < 53; i++) {
      if (i == 0) {
        gameString += this.addpeices();
      }

      gameString += "    ";
      gameString += JSON.parse(this.cardArray[i].card);
      gameString += " ";
      gameString += this.cardArray[i].suit;
      if (i == 13 || i == 26 || i == 39) gameString += "\n";
    }
    console.log(gameString);
    this.rollDice();
  },
  addpeices: function() {
    let peices = ["xxx", "ooo"];
    return peices;
  }
};

console.clear();
game.middleTiles();
game.endTiles();
game.addTiles();
game.displayGame();

// game.rollDice();

// first use both dice on one marker, get moving ready first based on die value,
// come up with method that applys dice value to number, apply stop later

//console.clear()
