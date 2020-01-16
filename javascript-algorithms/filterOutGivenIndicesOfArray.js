function removeArrayPart(inputArray, l, r) {

    for (let i = l; i <= r; i++) {
        (inputArray[i]) = null;
    }
    let newArr = inputArray.filter(x => x != null)
    return newArr;
}