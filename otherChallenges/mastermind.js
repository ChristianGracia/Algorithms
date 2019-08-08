const readline = require("readline");
const guessCounter = 0;

function masterGame(guessCounter) {
    var code = "12341234";

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("What is your guess? ", guess => {
        console.log(`Guess: ${guess}`);
        rl.close();
        masterMind(guess, code);

        if (masterMind(guess, code) == 8) {
            console.log("you win!");
        }
        else {
            console.log("guess count is: " + guessCounter);
            masterGame(guessCounter);
        }
    });
}
masterGame(guessCounter);

function masterMind(guess, code) {
    var length = code.length;
    var correctPositionCounter = 0;
    var correctLetterCounter = 0;

    var codeArr = code.split("");

    for (var i = 0; i < length; i++) {
        if (code[i] == guess[i]) {
            correctPositionCounter++;
        }
    }
    console.log("correct letters in position: " + correctPositionCounter);

    for (var j = 0; j < length; j++) {
        if (codeArr.indexOf(guess[j]) > -1) {
            correctLetterCounter++;
            codeArr[j] = " ";
        }
    }

    console.log("correct letters = " + correctLetterCounter);
    console.log([correctPositionCounter, correctLetterCounter]);

    return correctPositionCounter;
}

// masterMind(guess, code);
