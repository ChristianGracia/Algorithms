function uniteUnique(arr) {
    var set1 = new Set();

    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            if (!set1.has(arguments[i][j])) {
                set1.add(arguments[i][j]);
            }

        }

    }

    console.log(set1.next.value)
    var results = set1.values();
    var returnArr = [];



    console.log(returnArr);
    return returnArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);