
function destroyer(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arguments.length; j++) {
            if (arr[i] == arguments[j]) {
                arr.splice(i, 1);
            }
        }

    }
    console.log(arr)
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);





function destroyer(arr) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arguments.length; j++) {
            if (arr.indexOf(arguments[j]) < 0) {
                newArr.push(arr[i]);
            }
        }


    }


    console.log(arr)
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);