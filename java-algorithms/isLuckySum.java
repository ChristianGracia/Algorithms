boolean isLucky(int n) {
    
    int digitLength = 1;
    int c = n;
    
    while(c > 10) {
        digitLength++;
        c /= 10;
    
    }   
    
    int secondHalf = (int) (n % (Math.pow(10, digitLength/2)));
    
    int firstHalf = n / (Math.pow(10, digitLength/2));
        System.out.println(firstHalf);
          // System.out.println(c);
 
    return true;
}
