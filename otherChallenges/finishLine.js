const game = {
  cardArray: [],
  diceArray: [0],

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

  mapClass: (GameMap = function(tileNumber, card, suit) {
    this.tileNumber = tileNumber;
    this.card = card;
    this.suit = suit;
  }),

  tileMap: function() {
    for (let i = 1; i < 52; i++) {
      let tmp = new GameMap(i, (i % 13) + 1, i % 4);
      this.cardArray.push(tmp);
    }
    console.log(this.cardArray);
  }
};

game.tileMap();
game.rollDice();
