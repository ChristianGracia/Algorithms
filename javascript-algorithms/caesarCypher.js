function rot13(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        let letter = str[i].charCodeAt();
        if (letter > 96 && letter < 123) {
            letter = ((letter - 96 + 13) % 26) + 96;
        }
        if (letter > 64 && letter < 91) {
            letter = (((letter - 65) + 13) % 26) + 65;
        }
        arr.push(String.fromCharCode(letter));
    }
    return arr.join("");
}
//time 27 mins
rot13("SERR PBQR PNZC");


