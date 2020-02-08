int singleNumber(int[] nums)
{
    int res = 0;
    foreach (int num in nums)
    {
        res = num ^ res;
    }
    return res;
}



// Implement the missing code, denoted by ellipses.You may not modify the pre-existing code.
// You are given an array of integers in which every element appears twice, 
// except for one.Find the element that only appears one time. 
// Your solution should have a linear runtime complexity (O(n)). 
// Try to implement it without using extra memory.