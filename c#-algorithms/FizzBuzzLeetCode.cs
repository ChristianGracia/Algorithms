public class Solution {
 public IList < string > FizzBuzz(int n) {
  IList < string > returnString = new List < string > ();

  foreach(int index in Enumerable.Range(1, n)) {
   if (index % 5 == 0 && index % 3 == 0)
    returnString.Add("FizzBuzz");
   else if (index % 3 == 0)
    returnString.Add("Fizz");
   else if (index % 5 == 0)
    returnString.Add("Buzz");
   else {
    returnString.Add(Convert.ToString(index));
   }
  }
  return returnString;
 }
}