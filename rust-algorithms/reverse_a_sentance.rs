// Reverse the order of words in a given string sentence. You can assume that sentence does not have any leading, trailing or repeating spaces.

// Example

// For sentence = "Man bites dog", the output should be
// reverseSentence(sentence) = "dog bites Man".

fn reverseSentence(sentance: String) -> String {
    let mut mutableSentance: Vec<&str> = sentance.split(" ").collect();
    
    mutableSentance.reverse();
    mutableSentance.join(" ");

    return mutableSentance.join(" ")
}

fn reverseSentence(sentance: String) -> String {
    sentance.split(' ').rev().collect::<Vec<_>>().join(" ")
}