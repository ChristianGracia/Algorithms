class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        int num = 0;
        int counter = 0;
        int[] arr = new int[26];
    
        for(int i = 0; i < s.length(); i++){
            
            int charToNum = (int)Character.toLowerCase(s.charAt(i)) - 97;
            
            arr[charToNum]++;
            
            if(arr[charToNum] == 1){
                counter++;
                if(counter > num ){
                num = counter;
               }
            }
            else {
                counter = 0;
                for(int item : arr){
                    item = 0;
                }
            }
            
           
              
            
        }
             return num;
        
    }
}