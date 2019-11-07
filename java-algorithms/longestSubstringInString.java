class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        int num = 0;
        int counter = 0;
        
    
        
        for(int i = 0; i < s.length(); i++){
            
            int[] arr = new int[26];
            
            int charToNum = (int)Character.toLowerCase(s.charAt(i)) - 97;
            arr[charToNum]++;
            
            
            if(s.charAt(i) != ' ' && arr[charToNum] <= 1 ){
                counter++;
            }
            else {
                counter = 0;
            }
            
            if(counter > num){
                num = counter;
            }
              
            
        }
             return num;
        
    }
}