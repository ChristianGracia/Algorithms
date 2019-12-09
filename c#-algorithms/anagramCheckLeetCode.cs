public class Solution {
    public bool IsAnagram(string s, string t) {
        
    string sLetters = s.Split("").Sort();
    string tLetters = t.split("").Sort();
        
    foreach(String item in sLetters)
        Console.WriteLine(item);
    
    foreach(String item1 in tLetters)
        Console.WriteLine(item1);
    
        
    }
}