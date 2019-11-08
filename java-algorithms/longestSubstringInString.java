class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        int num = 1;
        int counter = 0;
        
        if(s.length() == 0) {
            return 0;
        }
        
     
        while(counter < s.length()){
            int counter2 = 1;
            String testString = "";
            testString += s.charAt(counter);
            for(int i = counter + 1; i < s.length(); i++){
                   testString += s.charAt(i);
             
                
                if(testString.indexOf(s.charAt(i)) == testString.lastIndexOf(s.charAt(i))){
                    counter2++;
                    if(num < counter2){
                        num = counter2;
                    }
                }
                else {
                    break;
                }
            
                
            }
            counter++;
        }
        return num;
        
    }
}