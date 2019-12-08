public class Solution {
 public int MajorityElement(int[] nums) {



  int currentMaxRepeated = 0;
  int maxRepeatedValue = 0;
    


  foreach(int item in nums) {
    if(nums.Distinct().ToArray().Length == 1){
        if (nums.Length > currentMaxRepeated) {
     currentMaxRepeated = nums.Length;
     maxRepeatedValue = nums[0];
   }
        break;
        
        
    }
  
    int[] numberFrequency = Array.FindAll(nums, e => e == item);
    nums = Array.FindAll(nums, e => e != item);
    if (numberFrequency.Length > currentMaxRepeated) {
     currentMaxRepeated = numberFrequency.Length;
     maxRepeatedValue = item;



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