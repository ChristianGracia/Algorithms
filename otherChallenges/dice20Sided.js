var readlineSync = require("readline-sync");

function singleRoll() {
  var roll = Math.floor(Math.random() * 20) + 1;
  return roll;
}

// function weaponDamage(x, y) {
//   var dice = x(Math.floor(Math.random(y)) + 1);
//   return dice;
// }

function dnd() {
  var modifier = readlineSync.question("Whats the modifier \n");
  var AC = readlineSync.question("Whats the armor class? \n");

  roll = singleRoll();
  console.log("roll was " + roll);

  if (roll == 1) {
    console.log("\nnice natural 1, you miss!!!");
  } else if (roll == 20) {
    console.log("\nnice natural 20, you hit!!!");
  } else {
    var result = parseInt(roll) + parseInt(modifier);
    console.log(result);
    if (parseInt(AC) > result) {
      console.log("you miss son");
    } else {
      console.log("you hit son");
    }
  }
}

dnd();
