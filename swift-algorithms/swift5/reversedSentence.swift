func reverseSentence(sentence: String) -> String {
let array = sentence.split(separator:" ")
    var reversedString = array.reversed().joined(separator: " ")
    return reversedString
}


func reverseSentence(sentence: String) -> String {

  return sentence.split(separator:" ").reversed().joined(separator: " ")

}