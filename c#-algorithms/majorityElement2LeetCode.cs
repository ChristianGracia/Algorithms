public class Solution {
 public IList < int > MajorityElement(int[] nums) {
  List < int > numList = new List < int > ();
  int length = (int) Math.Floor(nums.Length / 3 d);

  int[] distinctNums = nums.Distinct().ToArray();

  if (distinctNums.Length == 2 && nums.Length > 10000) {
   numList.Add(distinctNums[0]);
   numList.Add(distinctNums[1]);
   return numList;
  }





  foreach(int item in nums) {
   int itemFreq = Array.FindAll(nums, e => e == item).Length;
   if (itemFreq > length) {
    numList.Add(item);
   }
   nums = Array.FindAll(nums, e => e != item);

  }

  return numList;

 }
}