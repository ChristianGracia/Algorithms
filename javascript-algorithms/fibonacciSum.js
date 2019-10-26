function sumFibs(num) {
    sum = 0;
    if (num < 1) {
        return sum
    }

    sum += 2;

    var arr = [1, 1];

    for (var i = 1; i < num; i++) {
        arr.push(arr[i - 1] + arr[i]);
    }
    console.log(arr);

    return num;
}

sumFibs(4);
