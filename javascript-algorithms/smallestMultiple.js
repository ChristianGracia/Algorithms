function smallestCommons(arr) {

    var tempArr = [];

    if (arr[0] > arr[1]) {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    for (var i = arr[0]; i <= arr[1]; i++) {
        tempArr.push(i);
    }

    for (var j = arr[1]; ; j++) {
        var check = true;
        for (var k = 0; k < tempArr.length; k++) {
            if (j % tempArr[k] > 0) {
                check = false;
            }
        }
        if (check) {
            return j;
        }
    }
}

smallestCommons([1, 5]);