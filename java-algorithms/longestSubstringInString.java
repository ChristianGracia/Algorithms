class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        int num = 0;
        
    
        
        for(int i = 0; i < s.length(); i++){
            
            int counter = 0;
            char[] arr = new char[26];
            
            int charToNum = (int)Character.toLowerCase(s.charAt(i)) - 97;
            
            if(s.charAt(i) != " " || arr[i] < 1 ){
                counter++;
            }
            else {
                counter = 0;
            }
            
            if(counter > num){
                num = counter;
            }
            
            return num;
            
            
            
            
            
        }
        
    }
}