//this program askes a user to input a guess of what the secret code may be
//and returns the number of correct characters and the number
//of correct characters in position, the user has 8 tries to guess the code

const readline = require("readline");
var randomArr = [];
for (let i = 0; i < 8; i++) {
    randomArr[i] = Math.floor(Math.random() * 10);
}

function masterGame() {
    var code = randomArr.join("");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("What is your guess? ", guess => {
        console.log(`Guess: ${guess}`);
        rl.close();

        if (masterMind(guess, code) == 8) {
            console.log("you win!");
            return 0;
        }
        if (guessCounter == 8) {
            console.log("you lose");
        }
        else {
            masterGame();
        }
    });
}

masterGame();
var guessCounter = 0;

function masterMind(guess, code) {
    var length = code.length;
    let correctPositionCounter = 0;
    let correctLetterCounter = 0;

    let codeArr = code.split("");

    for (let i = 0; i < length; i++) {
        if (code[i] == guess[i]) {
            correctPositionCounter++;
        }
    }
    console.log("correct letters in position: " + correctPositionCounter);

    for (let j = 0; j < length; j++) {
        if (codeArr.indexOf(guess[j]) > -1) {
            correctLetterCounter++;
            codeArr[codeArr.indexOf(guess[j])] = " ";
        }
    }
    guessCounter++;

    console.log("correct letters = " + correctLetterCounter);
    console.log([correctLetterCounter, correctPositionCounter]);
    console.log("guess: " + guessCounter);

    return correctPositionCounter;
}
