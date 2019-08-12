const readline = require("readline");
var check1 = false;

var curr = Math.floor(Math.random() * 13) + 2;

function highLowGame() {
  if (check1 == true) {
    return 0;
  }
  var next = Math.floor(Math.random() * 13) + 2;

  console.log("current card is: " + curr);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("high or low? \n", guess => {
    rl.close();
    console.log("next card is: " + next);

    if (highLow(curr, guess, next) == 1) {
      curr = next;
      highLowGame();
    } else if (highLow(curr, guess, next) == 0) {
      return 0;
    }
  });
}

function highLow(curr, guess, next) {
  var check = false;

  if (curr > next && guess == "low") {
    console.log("you win, low is right");
    check = true;
    return check;
  } else if (curr < next && guess == "high") {
    console.log("you win, high is right");
    check = true;
    return check;
  } else if (curr == next) {
    check = true;
    console.log("pass");
    return check;
  } else if (check1 == false && curr < next && guess == "low") {
    console.log("you lose, low is wrong");
    check1 = true;
    return 0;
  } else if (check1 == false && curr > next && guess == "high") {
    console.log("you lose, high is wrong");
    check1 = true;
    return 0;
  } else {
    return check;
  }
}

highLowGame();
