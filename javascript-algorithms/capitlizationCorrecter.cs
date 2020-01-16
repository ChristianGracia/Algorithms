function properNounCorrection(noun) {
    let arr = noun.toLowerCase().split("")
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
 
}
