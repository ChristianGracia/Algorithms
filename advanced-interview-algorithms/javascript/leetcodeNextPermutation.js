// https://leetcode.com/problems/next-permutation/

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let firstMinIndex = -1;
  let firstMaxIndex = -1;
  let minDiff = Infinity;

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      firstMinIndex = i - 1;
      break;
    }
  }

  if (firstMinIndex < 0) {
    nums.sort((a, b) => a - b);
    return;
  }
  console.log(firstMinIndex);
  console.log(firstMaxIndex);

  for (let i = firstMinIndex; i < nums.length; i++) {
    let diff = nums[i] - nums[firstMinIndex];
    if (diff > 0 && diff < minDiff) {
      minDiff = diff;
      firstMaxIndex = i;
    }
  }

  nums[firstMinIndex] ^= nums[firstMaxIndex];
  nums[firstMaxIndex] ^= nums[firstMinIndex];
  nums[firstMinIndex] ^= nums[firstMaxIndex];

  //   console.log((nums[firstMinIndex] ^= nums[firstMaxIndex]));
  //   console.log((nums[firstMaxIndex] ^= nums[firstMinIndex]));
  //   console.log((nums[firstMinIndex] ^= nums[firstMaxIndex]));

  const sorted = nums.slice(firstMinIndex + 1, nums.length);
  sorted.sort((a, b) => a - b);
  let i = sorted.length,
    j = nums.length;
  while (i-- && j--) {
    nums[j] = sorted[i];
  }
  return;
};
const nums1 = [1, 3, 2];
const nums2 = [1, 2, 3];
nextPermutation(nums1);
console.log(nums1);
