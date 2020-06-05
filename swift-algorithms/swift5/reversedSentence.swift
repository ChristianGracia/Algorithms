func reverseSentence(sentence: String) -> String {
let array = sentence.split(separator:" ")
    print(array)
    var reversedString = array.reversed().joined(separator: " ")


    return reversedString


}
