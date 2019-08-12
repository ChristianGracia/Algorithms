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
    highLow(curr, guess);
  });

  highLowGame();
}

function highLow(curr, guess) {
  var next = Math.floor(Math.random() * 13) + 2;
  console.log("Next card is: ", next);

  if (curr > next && guess == "low") {
    console.log("you win, low is right");
  }
  if (curr < next && guess == "high") {
    console.log("you win, high is right");
  }
  if (curr == next) {
    console.log("pass");
  }
  if (curr < next && guess == "low") {
    console.log("you lose, low is wrong");
    return 0;
  }
  if (curr > next && guess == "high") {
    console.log("you lose, high is wrong");
    return 0;
  }
}

highLowGame();
