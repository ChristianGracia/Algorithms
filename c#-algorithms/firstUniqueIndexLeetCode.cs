public class Solution {
    public int FirstUniqChar(string s) {
        
        char[] letters = s.ToCharArray();
        
        
        foreach(char letter in letters){
            
            int firstIndex = Array.IndexOf(letters, letter);
            int lastIndex = Array.LastIndexOf(letters, letter);

            if(firstIndex == lastIndex){
                   return firstIndex;
            }
             
       
        }
        return -1;
        
    }
}