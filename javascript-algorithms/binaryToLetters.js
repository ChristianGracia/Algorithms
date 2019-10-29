function binaryAgent(str) {

    var newArr = [];
    var arr = str.split(" ");
    for (var l = 0; l < arr.length; l++) {
        let sum = 0;
        for (var i = 0, k = 7; i < 8; i++ , k--) {
            if (arr[l][i] == 1) {
                sum += Math.pow(2, k);
            }
        }
        newArr.push(sum);
    }
    var finalArray = newArr.map(x => x = String.fromCharCode(x))

    return finalArray.join("");
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


//time 32 mins because of time lost trying to use 2 ^ k instead of Math.pow(2, k);