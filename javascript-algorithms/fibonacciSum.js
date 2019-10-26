function sumFibs(num) {
    sum = 0;
    if (num < 1) {
        return sum
    }

    sum += 2;

    var k = 1;
    var l = 1;

    var count = 0

    while (count > num) {
        count = k + l;
        sum += count;

    }




    return num;
}

sumFibs(4);
