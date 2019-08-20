const readline = require("readline");

var rollCounter = 0;
var rollArray = fiveRolls();

function yahtzee() {
  rollCounter++;

  if (rollCounter == 4) {
    console.log("Final: " + rollArray);
    let counter = 0;

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

function scorer(rollArray, counter) {
  const options = [
    " Three of a kind (1)",
    " Four of a kind (2)",
    " Full House (3)",
    " Small Straight (4)",
    " Large Straight (5)",
    " Yahtzee (6)",
    " Chance (7)"
  ];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(`Press option # (1-7) for score: \n\n${options}\n`, answer => {
    rl.close();

    switch (true) {
      case answer == "1": {
        triple(rollArray, counter);
        break;
      }
      case answer == "2": {
        quad(rollArray, counter);
        break;
      }
      case answer == "3": {
        fullHouse(rollArray, counter);
        break;
      }
      case answer == "4": {
        straight(rollArray, counter);

        break;
      }
      case answer == "5": {
        largeStraight(rollArray, counter);
        break;
      }
      case answer == "6": {
        yahtzeeScore(rollArray, counter);

        break;
      }
      case answer == "7": {
        chance(counter);
        break;
      }
      default:
        console.log("\nincorrect choice");
        scorer(rollArray, counter);
    }
  });
}

function playAgain() {
  rollCounter = 0;
  rollArray = fiveRolls();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("play again? yes or no\n", answer => {
    console.log(`Answer: ${answer}\n`);
    rl.close();

    switch (true) {
      case answer == "yes": {
        yahtzee();
      }
      case answer == "no": {
        console.log("goodbye");
        break;
      }
      default:
        console.log("goodbye");
    }
  });
}

function triple(rollArray, counter) {
  var object = {};
  var result = [];

  rollArray.forEach(function(item) {
    if (!object[item]) {
      object[item] = 0;
    }
    object[item] += 1;
  });

  for (var prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }
  const set1 = new Set(rollArray);

  if (set1.size < 5) {
    if (result.length == 2) {
      for (let i = 0; i < 5; i++) {
        var checkA = 0;
        var checkB = 0;
        if (rollArray[i] == result[0]) {
          checkA++;
        }
        if (rollArray[i] == result[1]) {
          checkB++;
        }
        var tripleResult = 0;

        if (checkA == 3) {
          tripleResult = result[0] * 3;
          console.log("triple! score: " + tripleResult);
          playAgain();
        }
        if (checkB == 3) {
          tripleResult = result[1] * 3;
          console.log("triple! score: " + tripleResult);
          playAgain();
        } else {
          console.log("incorrect choice");
          scorer(rollArray, counter);
        }
      }
    } else {
      console.log("triple! score: " + result[0]);
      playAgain();
    }
  } else {
    console.log("incorrect choice!");
    scorer(rollArray, counter);
  }
}
function fullHouse(rollArray, counter) {
  const set1 = new Set(rollArray);

  if (set1.size == 2) {
    console.log("Full house!\nscore: 25");
  } else {
    console.log("incorrect choice");
    scorer(rollArray, counter);
  }
}
function quad(rollArray, counter) {
  var object = {};
  var result = [];

  rollArray.forEach(function(item) {
    if (!object[item]) {
      object[item] = 0;
    }
    object[item] += 1;
  });

  for (var prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }

  const set1 = new Set(rollArray);

  if (set1.size < 3) {
    let quaded = result[0] * 4;
    console.log("four of a kind!\nscore: " + quaded);
  } else {
    console.log("incorrect choice");
    scorer(rollArray, counter);
  }
}

function straight(rollArray, counter) {
  const set1 = new Set(rollArray);

  if (set1.size > 3) {
    if (
      (set1.has("1") && !set1.has("6")) ||
      (!set1.has("1") && set1.has("6"))
    ) {
      console.log("Small straight!\nscore: 30");
      playAgain();
    } else {
      console.log("incorrect choice");
      scorer(rollArray, counter);
    }
  } else {
    console.log("incorrect");
    scorer(rollArray, counter);
  }
}
function largeStraight(rollArray, counter) {
  const set1 = new Set(rollArray);
  if (!(set1.has("1") && !set1.has("6")) && set1.size == 5) {
    console.log("yes");
    if (set1.has("1") && set1.has("6")) {
      console.log("incorrect");
      scorer(rollArray, counter);
    } else {
      console.log("Large straight!\nscore: 40");
    }
  } else {
    console.log("incorrect choice\n");
    scorer(rollArray, counter);
  }
}

function yahtzeeScore(rollArray, counter) {
  const set1 = new Set(rollArray);

  if (set1.size > 4) {
    console.log("Yahtzee!!!!! score: 50");
    playAgain();
  } else {
    console.log("\nincorrect choice");
    scorer(rollArray, counter);
  }
}

function chance(counter) {
  console.log("You chose chance! \nscore: " + counter);
  playAgain();
}
