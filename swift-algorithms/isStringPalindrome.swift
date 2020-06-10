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
