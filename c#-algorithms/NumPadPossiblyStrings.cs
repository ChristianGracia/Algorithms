string[] pressingButtons(string buttons)
{

    string[] returnStrings = new string[1];
    Dictionary<int, string> numDictionary = new Dictionary<int, string>();
    numDictionary.Add(2, "abc");
    numDictionary.Add(3, "def");
    numDictionary.Add(4, "ghi");
    numDictionary.Add(5, "jkl");
    numDictionary.Add(6, "mno");
    numDictionary.Add(7, "pqrs");
    numDictionary.Add(8, "tuv");
    numDictionary.Add(9, "wxyz");
    Console.WriteLine(numDictionary[2][1]);
    return returnStrings;

    // string[] returnStrings = new string[1];
    // string[] numberValues = "abc def ghi jkl mno pqrs tuv wxyz".Split(" ");
    // Console.WriteLine(numberValues[1]);
    // return returnStrings;

}