const readline = require("readline");

var rollCounter = 0;
var rollArray = fiveRolls();

function yahtzee() {
  rollCounter++;

  if (rollCounter == 4) {
    console.log("Final: " + rollArray);
    var counter = 0;

    for (let i = 0; i < 5; i++) {
      counter += rollArray[i];
    }
    scorer(rollArray, counter);

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
  console.log(answerArray);

  answerArray.forEach(item => {
    rollArray[item - 1] = singleRoll();
    console.log(item + " rolled");
  });

  rollArray;

  return rollArray;
}

function scorer(counter, rollArray) {}
