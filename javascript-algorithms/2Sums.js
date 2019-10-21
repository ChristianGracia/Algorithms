var twoSum = function (nums, target) {

    var indexes = [];

    while (indexes.length < 1)
        nums.forEach(e => {
            for (var i = nums.indexOf(e) + 1; i < nums.length; i++) {
                if (e + nums[i] == target) {
                    indexes[0] = nums.indexOf(e)
                    indexes[1] = i;
                    break;
                }
            }
        })


    return indexes;
};



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {

    var indexes = [];

    nums.forEach(e => {
        for (var i = nums.indexOf(e) + 1; i < nums.length; i++) {
            if (e + nums[i] == target) {
                indexes[0] = nums.indexOf(e)
                indexes[1] = i;
            }
        }
    })

    return indexes;
};

//time = 13mins
