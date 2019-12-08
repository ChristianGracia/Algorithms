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