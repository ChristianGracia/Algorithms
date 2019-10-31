int phoneCall(int min1, int min2_10, int min11, int s) {
    int longestCall = 1;
    s = s - min1;
    
    while (s > 0)
    {
        longestCall++;
       
        if(longestCall < 10){
         
             s = s - min2_10;
        }
        else{
         s = s-min11;
        }
        
    }
    return longestCall;
}
