/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    const length = nums.length;
    let left = 0;
    
    for(let i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[left];
            nums[left] = temp;
            left++;
        }
    }
};