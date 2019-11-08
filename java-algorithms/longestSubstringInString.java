class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        int num = 0;
        int counter = 0;
        int[] arr = new int[27];
    
      
        for(int i = counter; i < s.length(); i++){
            
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
                i = s.indexOf(s.charAt(i)) + 1;
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

class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        int num = 0;
        int counter = 0;
        int counter2 = 0;
        while(counter < s.length()){
            String testString = "";
            for(int i = counter; i < s.length(); i++){
                testString += s.charAt(i);
                
                if(testString.indexOf(s.charAt(i)) == testString.lastIndexOf(s.charAt(i))){
                    counter2++;
                    if(num < counter2){
                        num = counter2;
                    }
                }
                else {
                    counter2 = 0;
                    i = s.length();
                }
            
                
            }
            counter++;
        }
        return num;
        
    }
}
