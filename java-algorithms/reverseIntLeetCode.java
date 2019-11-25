class Solution {
    public int reverse(int x) {
        
        
        String numberString = Integer.toString(x);
    
    int length = numberString.length();
        String returnString = "";
    
    for(int i = length - 1; i > -1; i--){
        string += Character.toString(numberString.charAt(i));
        
    }
        
        System.out.println(string);
        
    
        return Integer.valueOf(string);
    

        
    }
}