function telephoneCheck(str) {

    var check = true;

    if (str.replace(/(|)/g, "").length > 12) {
        return false;
    }


    return check;
}

telephoneCheck("555-555-5555");