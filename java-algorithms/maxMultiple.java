int maxMultiple(int divisor, int bound) {
    int N = 0;
    int maxMultiple = 0;
    
    while(N < bound)
    {
        N++;
        if(N % divisor == 0){
            maxMultiple = N;
            
        }
        
    }
    return maxMultiple;
}