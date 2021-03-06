function telephoneCheck(str) {

    var strCleaned = str.replace(/()\)|\(|-|\s/g, "");

    if (/\(/g.test(str) == true && /\)/g.test(str) == false ||
        /\)/g.test(str) == true && /\(/g.test(str) == false
    ) {
        return false;
    }
    if (strCleaned.length < 10 || strCleaned.length > 12) {
        return false;
    }
    else if ((strCleaned.length == 12 || strCleaned.length == 11) && strCleaned[0] != 1) {
        return false;
    }
    else if (str.split(" ")[0] > 1 && str.split(" ").length > 1) {
        return false;
    }
    else if (str[0] == "-" || str.slice(
        str.search(/\(/g), str.search(/\)/g)).length > 4
    ) {
        return false
    }
    else {
        return true;
    }
}
//time 28 mins
telephoneCheck("555-555-5555");

//refactored down to one conditional
function telephoneCheck(str) {

    var strCleaned = str.replace(/()\)|\(|-|\s/g, "");

    if ((/\(/g.test(str) == true && /\)/g.test(str) == false ||
        /\)/g.test(str) == true && /\(/g.test(str) == false) || (strCleaned.length < 10 || strCleaned.length > 12) ||
        ((strCleaned.length == 12 || strCleaned.length == 11) && strCleaned[0] != 1) || (str.split(" ")[0] > 1 && str.split(" ").length > 1) || (str[0] == "-" || str.slice(
            str.search(/\(/g), str.search(/\)/g)).length > 4
        )
    ) {
        return false;
    }
    return true;
}
