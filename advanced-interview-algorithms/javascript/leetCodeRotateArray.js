// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
//  var rotate = function(nums, k) {
//     while (k--) {
//         nums.unshift( nums.pop() );
//     }
// };

// // rotate([1, 2, 3, 4, 5], 2);
//  rotate([-1,-100,3,99], 2);
// //rotate([1, 2, 3, 4, 5, 6, 7], 3);


// // passes some testcases
// var rotate = function(nums, k) {
//     while (k--) {
//         nums.unshift( nums.pop() );
//     }
//     console.log(nums)
// };



// // works


// var rotate = function(nums, k) {
//     if (k >= nums.length ) {
//         k = k % nums.length
//     }
//     if ( k === 0 ) {
//         return nums
//     }
//     nums.unshift(...nums.slice(-k))
//     nums.splice(-k)
//     return nums
// };


// this also works

var rotate = function(nums, k) {
    nums.unshift(...nums.splice(- (k % nums.length)));
    // console.log(...nums.splice(- (k % nums.length)))
    return nums
};
console.log(rotate([1,2,3,4,5], 2))