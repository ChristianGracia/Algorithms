var readlineSync = require("readline-sync");
var turnCounter = 0;
var player1Location = [0, 0, 0];
var player2Location = [0, 0, 0];

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
    this.playerMove(this.diceArray);
  },
  playerMove: function() {
    var moveQuestion;

    do {
      moveQuestion = readlineSync.question(
        "\nPlayer " +
          ((turnCounter % 2) + 1) +
          "        " +
          "rolls = red: " +
          JSON.parse(this.diceArray.dice1) +
          ", black: " +
          JSON.parse(this.diceArray.dice2) +
          "\n\n" +
          "Would you like to move 1 or 2 peices?\n"
      );
    } while (moveQuestion > 2 || moveQuestion < 1);
    turnCounter++;

    if (moveQuestion == 1) {
      //get total
      let total =
        JSON.parse(this.diceArray.dice1) + JSON.parse(this.diceArray.dice2);
      //how many peices to move
      let peiceChoice = readlineSync.question(
        "which peice do you want to move? 1, 2, or 3?\n"
      );

      //player 1 or 2 check
      if (turnCounter & 1) {
        console.log(
          "moving player one's (" + peiceChoice + ") " + total + " spaces\n"
        );
        player1Location[peiceChoice - 1] += total;
        console.clear();

        this.displayGame();
      } else {
        console.log(
          "moving player two's (" + peiceChoice + ") " + total + " spaces\n"
        );
        player2Location[peiceChoice - 1] += total;
        console.clear();
        this.displayGame();
      }
    }

    // moving 2 peices
    else {
      //player 1
      if (turnCounter & 1) {
        var whichRedRoll = readlineSync.question(
          "input dice to apply red die roll\n"
        );
        console.log(
          "moving player one's (" +
            whichRedRoll +
            ") " +
            JSON.parse(this.diceArray.dice1) +
            " spaces\n"
        );
        player1Location[whichRedRoll - 1] += JSON.parse(this.diceArray.dice1);

        var whichBlackRoll = readlineSync.question(
          "input dice to apply black die roll\n"
        );
        console.log(
          "moving player one's (" +
            whichBlackRoll +
            ") " +
            JSON.parse(this.diceArray.dice1) +
            " spaces\n"
        );
        player1Location[whichBlackRoll - 1] += JSON.parse(this.diceArray.dice2);
        console.clear();
        this.displayGame();
      } else {
        //player 2
        var whichRedRoll = readlineSync.question(
          "input dice to apply red die roll\n"
        );
        console.log(
          "moving player two's (" +
            whichRedRoll +
            ") " +
            JSON.parse(this.diceArray.dice2) +
            " spaces\n"
        );
        player2Location[whichRedRoll - 1] += JSON.parse(this.diceArray.dice2);

        var whichBlackRoll = readlineSync.question(
          "input dice to apply black die roll\n"
        );
        console.log(
          "moving player one's (" +
            whichBlackRoll +
            ") " +
            JSON.parse(this.diceArray.dice2) +
            " spaces\n"
        );
        player2Location[whichBlackRoll - 1] += JSON.parse(this.diceArray.dice2);
        console.clear();
        this.displayGame();
      }
    }
    return moveQuestion;
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
      let tmp = new GameMap(i + 8, 0, "");
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
      //show peices current spot
      for (let j = 0; j < 4; j++) {
        if (player1Location[j] == i) {
          gameString += " X ";
        }
        if (player2Location[j] == i) {
          gameString += " O ";
        }
      }

      gameString += "    ";
      gameString += "[";

      switch (JSON.parse(this.cardArray[i].card)) {
        case 11:
          gameString += "J";
          break;
        case 12:
          gameString += "Q";
          break;
        case 13:
          gameString += "K";
          break;
        case 1:
          gameString += "A";
          break;
        case 0:
          gameString += " JOKER";
          break;

        default:
          gameString += JSON.parse(this.cardArray[i].card);
      }

      gameString += " ";
      gameString += this.cardArray[i].suit;
      gameString += "]";
      if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50)
        gameString += "\n\n";
    }
    console.log(gameString);
    this.rollDice();
  }
};

console.clear();
game.middleTiles();
game.endTiles();
game.addTiles();
game.displayGame();
