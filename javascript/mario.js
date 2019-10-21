var readlineSync = require("readline-sync");

var bool = false;

function mario() {
  var answer = readlineSync.question("Input a height: ");
  var height = parseInt(answer);

  if (answer.match(/[^a-z]/i)) {
    bool = true;
  }

  if (bool && height < 15 && height > 0) {
    console.log("height is: " + height);
    printHashes(height);
  } else {
    console.log("incorrect input (1-15)");
    mario();
  }
}

function printHashes(height) {
  var hashes = "#";
  var spaces = "";
  for (let i = 0; i < height - 1; i++) {
    spaces += " ";
  }
  for (let i = 0; i < height; i++) {
    console.log(spaces + hashes + "  " + hashes);
    hashes += "#";
    spaces = spaces.slice(0, -1);
  }
}

mario();
