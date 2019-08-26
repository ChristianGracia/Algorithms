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
  shuffleDice: function() {
    this.gameMap.sort(() => Math.random() * 0.5);
  }
};
deckRacer.createMap();

// console.log(deckRacer.rollDice());
console.log(deckRacer.gameMap);

deckRacer.shuffleDice();
console.log(deckRacer.gameMap);
