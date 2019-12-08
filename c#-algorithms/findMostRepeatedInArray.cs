public class Solution {
 public int MajorityElement(int[] nums) {

  int zeroCount = Array.FindAll(nums, e => e == 0).Length;

  int currentMaxRepeated = zeroCount > 0 ? zeroCount : 0;
  int maxRepeatedValue = 0;


  foreach(int item in nums) {
   if (item != 0) {
    int[] numberFrequency = Array.FindAll(nums, e => e == item);
    if (numberFrequency.Length > currentMaxRepeated) {
     currentMaxRepeated = numberFrequency.Length;
     maxRepeatedValue = item;
     for (int i = 0; i < nums.Length; i++) {
      nums[i] = 0;
     }

    }

   }

  }


  return maxRepeatedValue;
 }
}


public class Solution {
    public int MajorityElement(int[] nums) {

        
        int maxNumber = nums.Max();
        int maxIndex = 0;
        int mostRepeatedValue = 0;
        
        int[] arr = new int[maxNumber+1];
        
        foreach(int item in nums){
            arr[item]++;
        }

        
        for(int i = beginning; i < arr.Length; i++){
            if (arr[i] > maxIndex){
                maxIndex = arr[i];
                mostRepeatedValue = i;
                
            }
               
        }
        
        return mostRepeatedValue;  
    }
}