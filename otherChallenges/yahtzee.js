const readline = require("readline");

var rollCounter = 0;
var rollArray = fiveRolls();

function yahtzee() {
  rollCounter++;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(
    `dice: ${rollArray}\n Input the number of dice to reroll (1-5) starting from lowest to highest `,
    answer => {
      console.log(`Answer: ${answer}`);
      rl.close();

      if (rollCounter < 3) {
        yahtzee();
      } else {
        console.log("Done");
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

var rollObject = {
  roll1: singleRoll(),
  roll2: singleRoll(),
  roll3: singleRoll(),
  roll4: singleRoll(),
  roll5: singleRoll()
};

function dieHandler() {}
