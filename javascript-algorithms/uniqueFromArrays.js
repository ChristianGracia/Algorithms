function uniteUnique(arr) {
    var set1 = new Set();

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            set1.add(arr[i][j];)
        }

    }


    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);