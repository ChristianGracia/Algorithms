// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".




func commonCharacterCount(s1: String, s2: String) -> Int {
    var counter = 0
    var s1Array = Array(s1.utf8)
    var s2Array = Array(s2.utf8)

    for i in 0..<s1Array.count {
        if let p = s2Array.index(of:s1Array[i]) {
            a += 1
            s2Array.remove(at:p)
        }
    }
    return counter
}