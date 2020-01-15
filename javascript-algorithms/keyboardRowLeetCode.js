var findWords = function (words) {
    let topRow = "qwertyuiop";
    let middleRow = "asdfghjkl";

    let wordArr = [];

    words.forEach(word => {
        let topCheck = true;
        let middleCheck = true;
        for (let i = 0; i < word.length; i++) {
            if (topRow.indexOf(word[i].toLowerCase()) < 0) {
                topCheck = false;
            }

            if (middleRow.indexOf(word[i].toLowerCase()) < 0) {
                middleCheck = false;
            }
        }
        if (topCheck || middleCheck) {
            wordArr.push(word);
        }


    })
    return wordArr;

};