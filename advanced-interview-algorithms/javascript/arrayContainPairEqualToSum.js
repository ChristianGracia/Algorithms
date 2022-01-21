// Time complexity - O(n^2)
// Space complexity - O(1)
function hasPairWithSum1(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Time complexity - O(n)
// Space complexity - O(n)
function hasPairWithSum2(arr, sum) {
  const set = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (set.has(arr[i])) {
      return true;
    }
    set.add(sum - arr[i]);
  }
  return false;
}
