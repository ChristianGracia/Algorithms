/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const obj = {}
    for(let i = 0; i < nums.length; i++) {
        let index = (i + k) % (nums.length)
        if(i + k > nums.length - 1) {
            nums[i] = obj[i - k];
        } else {
            obj[i] = nums[i];
            nums[i] = nums[index];
        }
        // console.log(nums);
    }
};

rotate([1, 2, 3, 4, 5], 2);
rotate([1, 2, 3, 4, 5, 6, 7], 3);