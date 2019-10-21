function destroyer(arr) {
    var removed = [];

    for (var i = 1; i < arguments.length; i++) {
        removed.push(arguments[i]);
    }
    var fix = arr.filter(x => !removed.includes(x))

    return fix;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//done in 9 mins