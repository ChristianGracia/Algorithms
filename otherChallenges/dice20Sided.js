var readlineSync = require("readline-sync");

function singleRoll() {
  var roll = Math.floor(Math.random() * 20) + 1;
  return roll;
}

function weaponDamage(x, y) {
  var dice = x * (Math.floor(Math.random() * y) + 1);

  return dice;
}

function dnd() {
  roll = singleRoll();
  console.log("roll was " + roll);

  if (roll == 1) {
    console.log("\nnice natural 1, you miss!!!");
  } else if (roll == 20) {
    console.log("\nnice natural 20, you hit!!!");
  } else {
    var AC = readlineSync.question("Whats the armor class? \n");
    var modifier = readlineSync.question("Whats the modifier \n");
    var result = parseInt(roll) + parseInt(modifier);
    console.log(result);
    if (parseInt(AC) >= result) {
      console.log("you miss son");
    } else {
      var answer = readlineSync.question(
        "what kind of dice for dmg? (3d5, 2d6, etc)\n"
      );

      var check = stringParse(answer);
      var x = parseInt(check[0]);
      var y = parseInt(check[1]);

      var damage = weaponDamage(x, y);

      console.log("you hit son");

      console.log("you did " + damage + " damage");
    }
  }
}

dnd();

function stringParse(string) {
  var arraySplit = string.split("d");
  console.log(arraySplit);
  return arraySplit;
}
