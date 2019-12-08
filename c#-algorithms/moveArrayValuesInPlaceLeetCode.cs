public class Solution {
    public void MoveZeroes(int[] nums) {
        
        for(int i = 0; i< nums.Length -1; i++){
           if(nums[i] == 0){
               for(int j = i; j < nums.Length -1; j++){
                   int tmp = nums[j];
                   nums[j] = nums[j+1];
                   nums[j+1] = tmp;
               }
         
            }
            
        }
        
   

    }
}