class Solution {
    public int reverse(int x) {
        
        
        String numberString = Integer.toString(x);
    

        String returnString = "";
        boolean check = false;
        
        
        if(numberString.charAt(0) == '-'){
            check = true;
            numberString = numberString.substring(1);
        }
        
        int length = numberString.length();
    
    for(int i = length - 1; i > -1; i--){
        returnString += Character.toString(numberString.charAt(i));
    }
        
        try
    {
        int value = Integer.valueOf(returnString);     
        if(check)
        {
            return (-1 * value );
        }

        return value;
    }
    catch (NumberFormatException nfe)
    {
      System.out.println("NumberFormatException: " + nfe.getMessage());
    }
        return 0;

    }
}