function uniteUnique(arr) {
    var set1 = new Set();

    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            if (!set1.has(arguments[i][j])) {
                set1.add(arguments[i][j]);
            }

        }

    }


    var results = [];

    set1.forEach(x => results.push(x))
    console.log(results)



    return results;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);