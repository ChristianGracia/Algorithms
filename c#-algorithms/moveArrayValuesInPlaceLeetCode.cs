public class Solution {
    public void MoveZeroes(int[] nums) {
         int lastNoneZeroIndex = 0;
         for (int current = 0; current < nums.Length; current++) {
            if (nums[current] != 0) 
                nums[lastNoneZeroIndex++] = nums[current];    
         }
            
        for (int i = lastNoneZeroIndex; i < nums.Length; i++) 
        {
            nums[i] = 0;
        }
    
    }
}


public class Solution {
    public void MoveZeroes(int[] nums) {
        
        for(int i = 0; i< nums.Length; i++)
        {
        for(int k = 0; k < nums.Length; k++)
        {
            if(nums[i] == 0){
                for(int j = i; j < nums.Length -1; j++){
           
                    int temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                  
                }
            }
        }
        }
    }
}