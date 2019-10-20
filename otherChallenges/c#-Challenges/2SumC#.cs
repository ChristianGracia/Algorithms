public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {
        int[] indexes = new int[2];
        foreach (int item in nums)
        {
            for (int i = 0; i < nums.Length; i++)
            {
                if (item + nums[i] == target)
                {

                    return indexes;
                }

            }
        }
        return indexes;



    }
}