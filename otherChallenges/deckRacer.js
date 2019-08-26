const deckRacer = {
  gameMap: [],
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
  checkDeck: function() {
    for (var i = 0; i < 2; i++) {
      if (this.gameMap[0] < 3) {
        console.log("map[0] < 3");
      }
      if (this.gameMap[1] < 3) {
        console.log("map[0] < 3");
      }
    }
  }
};
deckRacer.createMap();
deckRacer.shuffleCard();
deckRacer.checkDeck();

// console.log(deckRacer.rollDice());
// console.log(deckRacer.gameMap);

deckRacer.shuffleCard();

// console.log(deckRacer.gameMap);
console.log(deckRacer.checkDeck());
