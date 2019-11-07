class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        int num = 0;
        int counter = 0;
        int[] arr = new int[27];
    
        for(int i = 0; i < s.length(); i++){
            
            int charToNum = (int)Character.toLowerCase(s.charAt(i)) - 97;
            if(s.charAt(i) == ' '){
                charToNum = 26;
                
            }
            
        
            if((charToNum > -1 && charToNum < 27 ) && arr[charToNum] == 0){
                
                    arr[charToNum]++;
    
                counter++;
                if(counter > num ){
                num = counter;
               }
            }
            else {
                counter = 1;
                for(int item : arr){
                    item = 0;
                }
                if(charToNum > -1 && charToNum < 27){
                         arr[charToNum]++;
                }
         
            }
  
            
        }
             return num;
        
    }
}