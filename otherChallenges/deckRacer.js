const deckRacer = {
  gameMap: [],
  createMap: function() {
    for (let i = 1; i < 8; i++) {
      for (let j = 1; j < 5; j++) {
        let obj = { card: i, suit: j };
        this.gameMap.push(obj);
      }
    }
    // console.log(this.gameMap);
  },
  rollDice: function() {
    let roll = Math.floor(Math.random() * 8) + 1;
    return roll;
  },
  shuffleCard: function() {
    this.gameMap.sort(() => Math.random() * 0.5);

    if (this.gameMap[0] < 3 || this.gameMap[0] > 5) {
      this.shuffleCard();
      console.log("reshuffle");
    }
    if (this.gameMap[1] < 3 || this.gameMap[1] > 5) {
      this.shuffleCard();
      console.log("reshuffle");
    }
    if (this.gameMap[26] < 3 || this.gameMap[26] > 5) {
      this.shuffleCard();
      console.log("reshuffle");
    }
    if (this.gameMap[27] < 3 || this.gameMap[27] > 5) {
      this.shuffleCard();
      console.log("reshuffle");
    }
    console.log(this.gameMap);
  }
};
deckRacer.createMap();
deckRacer.shuffleCard();

// console.log(deckRacer.rollDice());
// console.log(deckRacer.gameMap);

// console.log(deckRacer.gameMap);
