int leastFactorial(int n) {
    for(int incrementer = 0;; incrementer++){
        int number = 1;
        int factorialNum = incrementer;
        while(factorialNum > 1){
            number *= factorialNum;
            factorialNum--;
        }
        if(number >= n){
            return number;
        }
        
    }

}