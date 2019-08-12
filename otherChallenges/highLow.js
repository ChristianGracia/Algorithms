const readline = require("readline");

function highLowGame() {
  var curr = Math.floor(Math.random() * 13) + 2;
  console.log("current card is: " + curr);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("high or low? \n", guess => {
    console.log(`Guess: ${guess}`);
    rl.close();
    if (highLow(curr, guess) == 1) {
      console.log("you win");
      highLowGame();
    } else if (highLow(curr, guess) == 0) {
      console.log("you lose");
      return 0;
    }
  });
}

function highLow(curr, guess) {
  var next = Math.floor(Math.random() * 13) + 2;
  console.log("Next card is: ", next);

  if (curr > next && guess == "low") {
    console.log("you win, low is right");
    return 1;
  } else if (curr < next && guess == "high") {
    console.log("you win, high is right");
    return 1;
  } else if (curr == next) {
    console.log("pass");
    return 1;
  } else if (curr < next && guess == "low") {
    console.log("you lose, low is wrong");
    return 0;
  } else if (curr > next && guess == "high") {
    console.log("you lose, high is wrong");
    return 0;
  }
}

highLowGame();
