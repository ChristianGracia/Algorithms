function firstNotRepeatingCharacter(s) {

    let charArr = s.split("");
    for (let i = 0; i < charArr.length; i++) {

        let count = 0;
        for (let j = 0; charArr.length > j; j++) {
            if (charArr[i] == charArr[j]) {
                count++;
            }
        }
        if (count == 1) {
            return charArr[i];

        }
    }

    return "_";



}
