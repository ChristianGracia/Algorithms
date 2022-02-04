/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const obj = {}
    const check = k % 2 === 0 ? 0 : 1
    for(let i = 0; i < nums.length; i++) {
        
        let index = (i + k) % (nums.length - 1)
        obj[i] = nums[i];
        if(i + k >= nums.length - 1) {
            nums[i] = obj[index];
        } else {
            nums[i] = nums[index + check];
        }
    }
    console.log(nums)
};

// rotate([1, 2, 3, 4, 5], 2);
 rotate([-1,-100,3,99], 2);
//rotate([1, 2, 3, 4, 5, 6, 7], 3);