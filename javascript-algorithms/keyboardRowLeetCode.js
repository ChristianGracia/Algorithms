var findWords = function (words) {
    let topRow = "qwertyuiop";
    let middleRow = "asdfghjkl";
    let bottomRow = "zxcvbnm";

    let wordArr = [];

    words.forEach(word => {
        let topCheck = true;
        let middleCheck = true;
        let bottomCheck = true;
        for (let i = 0; i < word.length; i++) {
            if (topRow.indexOf(word[i].toLowerCase()) < 0) {
                topCheck = false;
            }

            if (middleRow.indexOf(word[i].toLowerCase()) < 0) {
                middleCheck = false;
            }
            if (bottomRow.indexOf(word[i].toLowerCase()) < 0) {
                bottomCheck = false;
            }
        }
        if (topCheck || middleCheck || bottomCheck) {
            wordArr.push(word);
        }


    })
    return wordArr;

};