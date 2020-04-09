def checkPalindrome(inputString)

return inputString == inputString.reverse ? true : false

end





def checkPalindrome(inputString)

if inputString == inputString.reverse
return true
else
    return false
end
end









# Given the string, check if it is a palindrome.

# Example

# For inputString = "aabaa", the output should be
# checkPalindrome(inputString) = true;
# For inputString = "abac", the output should be
# checkPalindrome(inputString) = false;
# For inputString = "a", the output should be
# checkPalindrome(inputString) = true.