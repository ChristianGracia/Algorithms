func checkPalindrome(inputString: String) -> Bool {
    
    var reversedArray = Array(inputString)
    var reversedString = String(reversedArray.reversed())
    print(inputString)
    print(reversedString)
    
    if(inputString == reversedString){
        return true
    }
    return false
    
}


// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
// Input/O