var guess = "dogs";
var code = "ssll";

function mastermind(guess, code) {
    
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
        if (codeArr.indexOf(guess[j]) > -1){
            correctLetterCounter++;
            codeArr[j] = " ";

        }
        console.log(codeArr)
    }

    console.log("correct letters = " + correctLetterCounter);
    console.log([correctPositionCounter, correctLetterCounter]);
}

mastermind(guess, code);
