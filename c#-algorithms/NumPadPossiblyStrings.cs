string[] pressingButtons(string buttons)
{

    // string[] returnStrings = new string[1];
    // Dictionary<int, string> numDictionary = new Dictionary<int, string>();
    // numDictionary.Add(2,"abc");
    // numDictionary.Add(3,"def");
    // numDictionary.Add(4,"ghi");
    // numDictionary.Add(5,"jkl");
    // numDictionary.Add(6,"mno");
    // numDictionary.Add(7,"pqrs");
    // numDictionary.Add(8,"tuv");
    // numDictionary.Add(9,"wxyz");
    // Console.WriteLine(numDictionary[2][1]);

    // for(int i = 0; i < )
    // return returnStrings;

    List<string> returnList = new List<string>();
    string[] numberValues = "abc def ghi jkl mno pqrs tuv wxyz".Split(" ");

    int[] nums = new int[buttons.Length];
    int numLength = 1;
    for (int i = 0; i < buttons.Length; i++)
    {
        nums[i] = Int32.Parse(Char.ToString(buttons[i]));
        // Console.WriteLine(nums[i]);
        numLength *= numberValues[nums[i] - 2].Length;
    }
    Console.WriteLine(numLength);



    // for(int i = 0; i < ){

    // }

    // Console.WriteLine(numberValues[1]);
    return returnList.ToArray();

}



//     Given a string of digits, return all of the possible non-empty letter combinations that the 
//  number could represent.The mapping of digits to letters is the same as you would find on a telephone's buttons, 

// The resulting array should be sorted lexicographically.

// Example

// For buttons = "42", the output should be
// pressingButtons(buttons) = ["ga", "gb", "gc", "ha", "hb", "hc", "ia", "ib", "ic"].