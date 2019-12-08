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

public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        
        List<int> numList = new List<int>();
        
        foreach(int num in nums){
            if(numList.Contains(num))
              return true;
            else{
                numList.Add(num);
            }
        }
        return false;
    }
              
             
        

}