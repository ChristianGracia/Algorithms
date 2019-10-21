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
                    indexes[0] = Array.IndexOf(nums, item);
                    indexes[1] = Array.IndexOf(nums, nums[i]);
                    return indexes;


                }

            }
        }
        return indexes;

    }
}