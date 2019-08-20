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
        console.log("answer =" + options[0]);
        break;
      }
      case answer == "2": {
        console.log("answer =" + options[1]);
        break;
      }
      case answer == "3": {
        console.log("answer =" + options[2]);
        break;
      }
      case answer == "4": {
        console.log("answer =" + options[3]);

        const set1 = new Set(rollArray);

        if (set1.size > 3) {
          if (
            (set1.has("1") && !set1.has("6")) ||
            (!set1.has("1") && set1.has("6"))
          ) {
            console.log("score: 30" + options[3]);
            playAgain();
          } else {
            console.log("incorrect");
            scorer(rollArray, counter);
          }
        }
        break;
      }
      case answer == "5": {
        console.log("answer =" + options[4]);

        const set1 = new Set(rollArray);

        console.log(set1.size);
        if (!(set1.has("1") && !set1.has("6")) && set1.size == 5) {
          console.log("yes");
          if (set1.has("1") && set1.has("6")) {
            console.log("incorrect");
            scorer(rollArray, counter);
          } else {
            console.log("score: 40" + options[4]);
          }
        } else {
          console.log("incorrect choice\n");
          scorer(rollArray, counter);
        }
        break;
      }
      case answer == "6": {
        console.log("answer =" + options[5]);
        const set1 = new Set(rollArray);
        console.log(set1);

        if (set1.size == 5) {
          console.log("Yahtzee!!!!! score: 50");
          playAgain();
        } else {
          console.log("\nincorrect choice");
          scorer(rollArray, counter);
        }

        break;
      }
      case answer == "7": {
        console.log("answer =" + options[6]);
        console.log("score: " + counter);
        playAgain();

        break;
      }
      default:
        console.log("\nincorrect choice");
        scorer(rollArray, counter);
    }
  });
}

function playAgain() {
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
        break;
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
