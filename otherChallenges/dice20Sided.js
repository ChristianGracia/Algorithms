function singleRoll() {
  var roll = Math.floor(Math.random() * 20) + 1;
  return roll;
}

function dnd() {
  roll = singleRoll();
  if (roll == 1) {
    console.log("nice natural 1");
  } else if (roll == 20) {
    console.log("nice natural 20");
  } else {
    console.log(roll);
  }
}

dnd();
