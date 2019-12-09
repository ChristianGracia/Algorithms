public class Solution {
 public bool IsAnagram(string s, string t) {
     
 if (s.Length != t.Length)
     return false;

  char[] sLetters = s.ToArray();
  char[] tLetters = t.ToArray();
     

  Array.Sort(sLetters);
  Array.Sort(tLetters);
 
   
  {

   for (int i = 0; i < tLetters.Length; i++) {
    if (sLetters[i] != tLetters[i]){
        return false;
    }

   }
   return true;

  } 
 }

}