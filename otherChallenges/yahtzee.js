const readline = require("readline");

var rollCounter = 0;
const rolls = fiveRolls();

function yahtzee() {
  rollCounter++;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(`dice: ${rolls} \n Which to reroll?`, answer => {
    console.log(`Answer: ${answer}`);
    rl.close();

    if (rollCounter < 4) {
      yahtzee();
    } else {
      console.log("Done");
    }
  });
}
yahtzee();

function singleRoll() {
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}
function fiveRolls() {
  var rollArray = [];
  for (let i = 0; i < 5; i++) {
    rollArray.push(singleRoll());
  }
  console.log(rollArray);
}
