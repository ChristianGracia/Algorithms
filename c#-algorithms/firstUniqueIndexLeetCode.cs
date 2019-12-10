public class Solution {
    public int FirstUniqChar(string s) {
        foreach(string letter in s){
            int firstIndex = Array.IndexOf(s,letter);
            Console.WriteLine(firstIndex);
        }
        return -1;
        
    }
}