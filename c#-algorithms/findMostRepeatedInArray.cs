public class Solution {
    public int MajorityElement(int[] nums) {
        
        int max = 0;
        int max1 = 0;
        foreach(int i in nums){
            if(i > max)
                max = i;
            
        }
        
        int[] arr = new int[max+1];
        
        foreach(int item in nums){
            arr[item]++;
        }
        for(int i = 0; i < nums.Length; i ++){
            if (arr[i] > max1)
                max1 = i;
        }
        
        return max1;
        
        
        
    }
}