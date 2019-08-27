const deckRacer = {
  gameMap: [],
  player1: -1,
  player2: -1,

  createMap: function() {
    for (let i = 1; i < 8; i++) {
      for (let j = 1; j < 5; j++) {
        let obj = { card: i, suit: j };
        this.gameMap.push(obj);
      }
    }
  },
  rollDice: function() {
    let roll = Math.floor(Math.random() * 8) + 1;
    return roll;
  },
  shuffleCard: function() {
    this.gameMap.sort(() => Math.random() * 0.5);
  },
  shuffleCheck: function() {
    let tmp = [];

    for (var i = 0; i < 14; i++) {
      if (tmp.length > 1) {
        i = 14;
      }

      if (this.gameMap[i].card > 2 && this.gameMap[i].card < 6) {
        tmp.push(this.gameMap[i]);
      }
    }

    console.log(tmp);
  },
  movePlayer: function() {
    let roll = this.rollDice();
    console.log("dice roll is " + roll);
  }
};
deckRacer.createMap();
deckRacer.shuffleCard();
deckRacer.shuffleCheck();
// console.log(deckRacer.gameMap);

// deckRacer.movePlayer();

// console.log(deckRacer.rollDice());
// console.log(deckRacer.gameMap);
