int leastFactorial(int n) {
    for(int i = 0;; i++){
        int number = 1;
        int j = i;
        while(j > 1){
            number = number * j;
            j--;
        }
        if(number > n){
            return number;
        }
        
    }

}