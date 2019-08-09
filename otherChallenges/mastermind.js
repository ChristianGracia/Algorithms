const readline = require("readline");

function masterGame() {
  var code = "12341234";
  var flag = false;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("What is your guess? ", guess => {
    console.log(`Guess: ${guess}`);
    rl.close();

    if (masterMind(guess, code) == 8) {
      console.log("you win!");
      flag = true;
      return 0;
    }
    if (guessCounter == 8) {
      console.log("you lose");
    } else {
      masterGame();
    }
  });
}

masterGame();
var guessCounter = 0;

function masterMind(guess, code) {
  var length = code.length;
  var correctPositionCounter = 0;
  var correctLetterCounter = 0;

  var codeArr = code.split("");

  for (var i = 0; i < length; i++) {
    if (code[i] == guess[i]) {
      correctPositionCounter++;
    }
  }
  console.log("correct letters in position: " + correctPositionCounter);

  for (var j = 0; j < length; j++) {
    if (codeArr.indexOf(guess[j]) > -1) {
      correctLetterCounter++;
      codeArr[codeArr.indexOf(guess[j])] = " ";
    }
  }
  guessCounter++;

  console.log("correct letters = " + correctLetterCounter);
  console.log([correctPositionCounter, correctLetterCounter]);
  console.log("guess: " + guessCounter);

  return correctPositionCounter;
}
