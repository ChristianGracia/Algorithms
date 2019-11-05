boolean palindromeRearranging(String inputString) {
    
    int[] array = new int[26];
    
    for(int i = 0; i < inputString.length(); i++)
    {
        int num = (int)Character.toLowerCase(inputString.charAt(i)) - 97;
        
       if(num >= 0 && num < 26){
           array[num]++;
         }
        
    }
    
    int counter = 0;
    
    for(int item : array){
     
        if (item % 2 != 0){
            counter++;
            
        }
        if(counter > 1){
            return false;
        }
          
    }
    return true;
}

