function dropElements(arr, func) {

    if (arr.filter(func).length == 0) {
        return [];
    }

    var index = arr.indexOf(arr.find(func));

    var newArr = [];

    for (var i = index; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr
}

dropElements([1, 2, 3], function (n) { return n < 3; });

//time 11 mins