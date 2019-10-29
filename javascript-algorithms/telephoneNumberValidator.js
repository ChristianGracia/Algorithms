function telephoneCheck(str) {

    var check = true;
    var strCleaned = str.replace(/(.)\)|\(|-|\s/g, "");

    if (strCleaned.length < 11 || strCleaned.length > 12) {
        return false;
    }
    if ((strCleaned.length == 12 || strCleaned.length == 11) && strCleaned[0] != 1) {
        return false;
    }
    if (str.split(" ")[0] > 1 && str.split(" ").length > 1) {
        return false;
    }


    return check;
}

telephoneCheck("555-555-5555");