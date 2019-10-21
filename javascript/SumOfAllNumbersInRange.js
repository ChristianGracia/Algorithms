function sumAll(arr) {

    var start = 0;
    var end = 1;
    var sum = 0;
    if (arr[0] > arr[1]) {
        start = 1;
        end = 0;
    }

    for (var i = arr[start]; i <= arr[end]; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}
sumAll([1, 4]);


//time = 4:50