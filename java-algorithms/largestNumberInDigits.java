int largestNumber(int n) {
    int largestNum = 9;
    
      for(int i=1;i < n; i++){ 
         
        largestNum += 10 * ( Math.pow(10, i - 1)) * 9;
    }  
    return largestNum;
}