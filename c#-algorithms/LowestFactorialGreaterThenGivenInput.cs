int leastFactorial(int n) {
    for(int incrementer = 0;; incrementer++){
        int number = 1;
        int factorialNum = incrementer;
        while(j > 1){
            number = number * factorialNum;
            factorialNum--;
        }
        if(number >= n){
            return number;
        }
        
    }

}