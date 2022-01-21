function logger(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("logged");
  }
}

logger([1, 2, 3, 4, 4]);

// space complexity = O(1)

///////////////////////////////////////////////////////////////////////////////

function logger2(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = "";
  }
  return arr;
}

logger2(6);

// space complexity = O(n)
