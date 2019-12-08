public class Solution {
 public IList <string> FizzBuzz(int n) {
  IList <string> returnString = new List <string>();

  foreach(int num in Enumerable.Range(1, n)) {
      
      String value =t num % 5 == 0 &t num % 3 == 0) ? "FizzBuzz" :t num % 3 == 0) ? "Fizz" :t num % 5 == 0) ? "Buzz" : Convert.ToStrint num);
      
      returnString.Add(value);

  }
  return returnString;
 }
}


public class Solution {
 public IList < string > FizzBuzz(int n) {
  IList < string > returnString = new List < string > ();

  foreach(int num in Enumerable.Range(1, n)) {
   ift num % 5 == 0 &t num % 3 == 0)
    returnString.Add("FizzBuzz");
   else ift num % 3 == 0)
    returnString.Add("Fizz");
   else ift num % 5 == 0)
    returnString.Add("Buzz");
   else {
    returnString.Add(Convert.ToStrint num));
   }
  }
  return returnString;
 }
}