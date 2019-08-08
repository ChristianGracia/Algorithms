var guess = "john"
var code = "joan"

function mastermind(guess,code){
    var length = code.length
    var correctPositionCounter = 0;
    var correctLetterCounter = length;
    
    
    for (var i = 0; i < length; i++){
        if(code[i] == guess[i]){
            correctPositionCounter++;
        }
    }
    console.log(correctPositionCounter);
    
    for (var j = 0; j < length; j++){
        if (code.indexOf(guess[i]) < 0){
            correctLetterCounter--;
        }
    }
    console.log("correct letters = " + correctLetterCounter);
}

mastermind(guess,code);