function sumPrimes(num) {

    var check = true;
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        check = true;
        for (let j = 2, s = Math.sqrt(i); j <= s; j++) {
            if (i % j == 0) {
                check = false;
            }
        }
        if (check) {
            sum += i;

        }
    }

    console.log(sum);
    return sum - 1;
}


//21 mins
sumPrimes(10);