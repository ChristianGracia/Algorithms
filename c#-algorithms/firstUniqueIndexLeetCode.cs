public class Solution {
 public int FirstUniqChar(string s) {

  char[] letters = s.ToCharArray();


  foreach(char letter in letters) {

   int firstIndex = Array.IndexOf(letters, letter);


   if (firstIndex == Array.LastIndexOf(letters, letter)) {
    return firstIndex;
   }


  }
  return -1;

 }
}