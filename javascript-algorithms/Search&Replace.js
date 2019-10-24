function myReplace(str, before, after) {
    var startIndex = str.search(before);
    var stringStart = str.slice(0, startIndex);

    console.log(stringStart);
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
