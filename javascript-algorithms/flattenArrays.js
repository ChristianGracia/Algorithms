function steamrollArray(arr) {
    return arr.flat(3)
}

steamrollArray([1, [2], [3, [[4]]]]);