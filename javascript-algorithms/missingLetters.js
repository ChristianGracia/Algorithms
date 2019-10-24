function fearNotLetter(str) {
    var string = "abcdefghijklmnopqrstuvwxyz";
    var start = string.indexOf(str[0]);

    for (var i = 0; i < str.length; i++) {
        if (string[start + i] != str[i]) {
            return string[start + i];
        }
    }
    return undefined;
}

fearNotLetter("abce");

//done in 11 mins