function myReplace(str, before, after) {

    if (before[0] == before[0].toUpperCase()) {
        after = after.slice(0, 1).toUpperCase() + after.substr(1);
    }

    str = str.replace(before, after);

    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


//time 11 mins