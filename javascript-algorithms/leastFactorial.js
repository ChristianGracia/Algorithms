function leastFactorial(n) {

    for (var incrementor = 0; ; incrementor++) {
        var number = 1;
        var factorialNum = incrementor;
        while (factorialNum > 1) {
            number *= factorialNum;
            factorialNum--;
        }
        if (number >= n) {
            return number;
        }
    }

}
