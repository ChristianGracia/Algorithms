boolean isLucky(int n) {
    
    int digitLength = 1;
    int c = n;
    
    while(c > 10) {
        digitLength++;
        c /= 10;
    
    }   
    
    String secondHalf = Integer.toString((int) (n % (Math.pow(10, digitLength/2))));
    
    
    String firstHalf = Integer.toString((int) (n / (Math.pow(10, digitLength/2))));
    
              System.out.println(firstHalf);
           System.out.println(secondHalf);
    
    int firstSum = 0;
    int secondSum = 0;
    
    
    for (int i = 0; i < secondHalf.length(); i++){
        
            System.out.println(secondHalf.charAt(i));
           System.out.println(firstHalf.charAt(i));
         firstSum += (int) secondHalf.charAt(i);
        secondSum += (int) firstHalf.charAt(i);

        
    }
    
               System.out.println(firstSum);
           System.out.println(secondSum);
    


    
    if (firstSum == secondSum){
        return true;
    }
    return false;


}

