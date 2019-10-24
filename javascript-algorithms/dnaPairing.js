function pairElement(str) {
    var arr = [];

    for (var i = 0; i < str.length; i++) {

        let tempArr = [];
        let letter = ""
        switch (str[i]) {
            case "A":
                letter = "T";
                break;
            case "T":
                letter = "A";
                break;
            case "C":
                letter = "G";
                break;
            case "G":
                letter = "C";
                break;
            default:
                break;
        }
        tempArr[0] = str[i];
        tempArr[1] = letter;
        arr.push(tempArr);
    }
    console.log(arr);
    return arr;
}

pairElement("GCG");

//done in 8 mins