const game = {
  cardArray: [],

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
