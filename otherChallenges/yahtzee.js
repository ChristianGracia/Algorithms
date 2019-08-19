const readline = require("readline");

var rollCounter = 0;
var rollArray = fiveRolls();

function yahtzee() {
  rollCounter++;

  if (rollCounter == 4) {
    console.log("done");
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
  if (answerArray.indexOf("1") > -1) {
    rollArray[0] = singleRoll();
    console.log("1 rolled");
  }
  if (answerArray.indexOf("2") > -1) {
    rollArray[1] = singleRoll();
    console.log("2 rolled");
  }
  if (answerArray.indexOf("3") > -1) {
    rollArray[2] = singleRoll();
    console.log("3 rolled");
  }
  if (answerArray.indexOf("4") > -1) {
    rollArray[3] = singleRoll();
    console.log("4 rolled");
  }
  if (answerArray.indexOf("5") > -1) {
    rollArray[4] = singleRoll();
    console.log("5 rolled");
  }

  return rollArray;
}
