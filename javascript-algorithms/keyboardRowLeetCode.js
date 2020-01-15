var findWords = function (words) {
    let topRow = "qwertyuiop";
    let middleRow = "asdfghjkl";

    let wordArr = [];

    words.forEach(word => {
        let topCheck = true;
        let middleCheck = true;
        for (let i = 0; i < word.Length; i++) {
            if (!topRow.includes(word[i])) {
                topCheck = false;
            }

            if (!middleRow.includes(word[i])) {
                middleCheck = false;
            }
        }
        if (topCheck || bottomCheck) {
            wordArr.push(word);
        }


    })
    return wordArr;

};