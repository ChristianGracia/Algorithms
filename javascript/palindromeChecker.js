function checkPalindrome(inputString) {
    var emptyString = "";
    var length = inputString.length - 1;

    for (var i = length; i > -1; i--) 
    {
        emptyString += inputString[i];
    }


    if (emptyString == inputString) 
    {
        return true;
    }
    else {
        return false;
    }



}
