// Time complexity O(n), space complexity O(n)
function twoSum1(nums, target) {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
}

// Time complexity O(n), space complexity O(n)
function twoSum2(nums, target) {
  const map = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.hasOwnProperty(diff)) {
      result = [map[diff], i];
      break;
    }
    map[nums[i]] = i;
  }
  return result;
}

// Time complexity O(n), space complexity O(n)
function twoSum3(nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
}
