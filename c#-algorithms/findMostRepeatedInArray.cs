public class Solution {
    public int MajorityElement(int[] nums) {
        
        int max = 0;
        int max1 = 0;
        int maxNum = 0;
        foreach(int item in nums){
            if(item > max)
                max = item;
            
        }
        
        int[] arr = new int[max+1];
        
        foreach(int item in nums){
            arr[item]++;
        }
        
        for(int i = 0; i < arr.Length; i ++){
            if (arr[i] > max1)
                maxNum = i;
        }
        
        return maxNum;
        
        
        
    }
}