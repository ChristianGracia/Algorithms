function sumFibs(num) {
    var sum = 0;
    if (num < 1) {
        return sum
    }
    if (num == 1) {
        return 2;
    }

    var arr = [1, 1];

    for (var i = 1; i < num; i++) {
        if ((arr[i - 1] + arr[i]) > num) {
            break;
        }
        arr.push(arr[i - 1] + arr[i]);
    }

    arr.forEach(x => {
        if (x % 2 !== 0) {
            sum += x;
        }
    })

    return sum;
}

//time 17 mins

sumFibs(4);