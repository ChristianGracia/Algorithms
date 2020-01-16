/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let count = 0;
    let sortedArr = heights.map(x => x)
    sortedArr.sort();

    for (let i = 0; i < heights.length; i++) {
        if (sortedArr[i] != heights[i]) {
            count++;
        }
    }
    return count;

};