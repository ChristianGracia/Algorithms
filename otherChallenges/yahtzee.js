const readline = require("readline");

var rollCounter = 0;
var rollArray = fiveRolls();

function yahtzee() {
  rollCounter++;

  if (rollCounter == 4) {
    console.log("Final: " + rollArray);
    return 0;
  }
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(
    `dice: ${rollArray}\n Input the index of dice to reroll (1-5) `,
    answer => {
      console.log(`Answer: ${answer}`);
      rl.close();

      if (rollCounter < 4) {
        rollArray = dieHandler(answer);
        yahtzee();
      }
    }
  );
}
yahtzee();

function singleRoll() {
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}
function fiveRolls() {
  const rollArray = [];
  for (let i = 0; i < 5; i++) {
    rollArray.push(singleRoll());
  }
  return rollArray;
}

function dieHandler(answer) {
  var answerArray = answer.split("");

  for (let i = 0; i < answerArray.length; i++) {
    answerArray[i] = answerArray[i] - 1;
  }
  console.log(answerArray);

  for (let i = 0; i < 5; i++) {
    if (answerArray.indexOf(i) > -1) {
      rollArray[0] = singleRoll();
      console.log(i + 1 + " rolled");
    }
  }
  return rollArray;
}
