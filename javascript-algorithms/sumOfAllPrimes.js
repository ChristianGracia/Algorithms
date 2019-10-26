function sumPrimes(num) {

    var arr = []
    var check = true;
    var sum = 0;

    for (var i = 1; i < num; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                check = false;
                break;
            }
        }
        if (check) {
            sum += num;
        }
    }

    console.log(sum);
    return sum;
}

sumPrimes(10);