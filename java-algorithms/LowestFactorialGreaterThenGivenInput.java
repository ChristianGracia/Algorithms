int leastFactorial(int n) {
    for(int incrementor = 0;;incrementor++){
        int number = 1;
        int factorialNum = incrementor;
        while(factorialNum > 1){
            number = number * factorialNum;
            factorialNum--;
        }
        if(number >= n){
            return number;
        }
    }

}