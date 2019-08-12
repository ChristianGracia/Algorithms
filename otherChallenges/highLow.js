const readline = require("readline");

var curr = 8;
var guess = "low";

function highLow(curr, guess) {
  var next = 7;

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
  }
  if (curr > next && guess == "high") {
    console.log("you lose, high is wrong");
  }
}

highLow(curr, guess);

// function highLowGame(curr) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   rl.question("high or low? \n", guess => {
//     console.log(`Guess: ${guess}`);
//     rl.close();
//   });
// }

// highLowGame(curr);
