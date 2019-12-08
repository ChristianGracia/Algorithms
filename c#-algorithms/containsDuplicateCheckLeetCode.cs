public class Solution {
    public bool ContainsDuplicate(int[] nums) {
    foreach(int item in nums){
     if(Array.IndexOf(nums, item) != Array.LastIndexOf(nums, item)){
         return true;
         }
    }
        return false;
    
    }
}