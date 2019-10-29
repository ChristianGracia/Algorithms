function rot13(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        let letter = str[i].charCodeAt();
        if (str[i] = str[i].toUpperCase()) {
            letter = ((letter - 65 + 13)) % 26;
            console.log(String.fromCharCode(letter))
            arr.push(String.fromCharCode(letter));
        }

    }

    console.log(arr.join())
    return arr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
