public class Solution {
    public int RemoveElement(int[] nums, int val) {
        
        int lastNonRemoved = 0;
        
        for(int i = 0; i < nums.Length; i++){
            if(nums[i] != val)
            {
               nums[lastNonRemoved++] = nums[i];
            }
        }
        
        for (int newZero = lastNonRemoved; newZero < nums.Length; newZero++) 
        {
            nums[newZero] = 0;
        }
        int arrLength = nums.Length - lastNonRemoved;
        Console.WriteLine(arrLength);

        return arrLength;

    }
}