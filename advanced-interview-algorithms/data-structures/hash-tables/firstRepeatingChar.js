const firstRepeatingCharacter = (nums) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = nums[i]
        } else  {
            return map[nums[i]];
        }
    }
    return undefined;
}

console.log(firstRepeatingCharacter([2, 3, 4, 5, 6, 7, 2, 3, 4, 5,]));

console.log(firstRepeatingCharacter([2, 3, 4, 5, 6, 7, 3, 3, 4, 5,]));