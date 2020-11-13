// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".


fn commonCharacterCount(s1: String, s2: String) -> i32 {

    let mut counter : i32 = 0;
    
    for (i, c) in s1.chars().enumerate() {
        
        if s2.contains(c){
            counter += 1;
            s2.replacen(c, "", 1);
        }
    }
    return counter;
}
