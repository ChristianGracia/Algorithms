const readline = require("readline");
var check1 = false;
var score = 0;

var suits = ["clubs", "hearts", "spades", "diamonds"];

var current = {
  value: Math.floor(Math.random() * 13) + 2,
  suit: suits[Math.floor(Math.random() * 4)]
};

function highLowGame() {
  if (check1 == true) {
    return 0;
  }

  var next = {
    value: Math.floor(Math.random() * 13) + 2,
    suit: suits[Math.floor(Math.random() * 4)]
  };
  if (next.value == current.value && next.suit == current.suit) {
    console.log("duplicate");
    next = {
      value: Math.floor(Math.random() * 13) + 2,
      suit: suits[Math.floor(Math.random() * 4)]
    };
  }

  console.log("\n\ncurrent card is: " + current.value + " of " + current.suit);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("high or low? \n", guess => {
    rl.close();
    console.log("\n\nnext card is: " + next.value + " of " + next.suit);

    if (highLow(current, guess, next) == 1) {
      current = next;
      score++;
      console.log("score: " + score);
      highLowGame();
    } else if (highLow(current, guess, next) == 0) {
      return 0;
    }
  });
}

function highLow(current, guess, next) {
  var check = false;

  if (current.value > next.value && guess == "low") {
    console.log("you win, low is right");
    check = true;
    return check;
  } else if (current.value < next.value && guess == "high") {
    console.log("you win, high is right");
    check = true;
    return check;
  } else if (current.value == next.value) {
    check = true;
    console.log("pass");
    return check;
  } else if (check1 == false && current.value < next.value && guess == "low") {
    console.log("you lose, low is wrong");
    check1 = true;
    return 0;
  } else if (check1 == false && current.value > next.value && guess == "high") {
    console.log("you lose, high is wrong");
    check1 = true;
    return 0;
  } else {
    return check;
  }
}

highLowGame();
