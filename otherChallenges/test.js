var suits = ["clubs", "hearts", "spades", "diamonds"];
var current = {
  value: Math.floor(Math.random() * 13) + 2,
  suit: suits[Math.floor(Math.random() * 4)]
};
next = {
  value: Math.floor(Math.random() * 13) + 2,
  suit: suits[Math.floor(Math.random() * 4)]
};

function test() {
  for (var i = 0; i < 100; i++) {
    var current = {
      value: Math.floor(Math.random() * 13) + 2,
      suit: suits[Math.floor(Math.random() * 4)]
    };
    next = {
      value: Math.floor(Math.random() * 13) + 2,
      suit: suits[Math.floor(Math.random() * 4)]
    };
    if (next.value == current.value && next.suit == current.suit) {
      console.log(next);
      console.log(current);
      console.log("duplicate");
      next = {
        value: Math.floor(Math.random() * 13) + 2,
        suit: suits[Math.floor(Math.random() * 4)]
      };
      console.log("next is" + next.value + next.suit);
    }
  }
}
test();
