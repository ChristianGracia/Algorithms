public class Solution {
    public IList<int> MajorityElement(int[] nums) {
        List<int> numList = new List<int>();
        int length = (int)Math.Floor(nums.Length/3d);
     
        
        foreach(int item in nums){
            int itemFreq = Array.FindAll(nums, e => e == item).Length;
               Console.WriteLine(itemFreq);
            if(itemFreq > length){
                numList.Add(item);
            }
           nums = Array.FindAll(nums, e => e != item);
            
        }

        return numList;
        
    }
}