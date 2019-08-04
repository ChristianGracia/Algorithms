function adjacentElementsProduct(inputArray) {
    var length = inputArray.length;
    var highestProduct = -100;

    for (var i = 0; i < length; i++) {
        if ((inputArray[i] * inputArray[i + 1]) > highestProduct) 
        {
            highestProduct = inputArray[i] * inputArray[i + 1];
        }

    }
    return highestProduct;

}
