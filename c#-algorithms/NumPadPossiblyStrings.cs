string[] pressingButtons(string buttons)
{

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

    for (int i = 0; i < numLength; i++)
    {
        string newString = "";
        for (int j = 0; j < nums.Length; j++)
        {
            newString += numberValues[nums[j] - 2];
        }
        returnList.Add(newString);

    }
    return returnList.ToArray();
}




//     Given a string of digits, return all of the possible non-empty letter combinations that the 
//  number could represent.The mapping of digits to letters is the same as you would find on a telephone's buttons, 

// The resulting array should be sorted lexicographically.

// Example

// For buttons = "42", the output should be
// pressingButtons(buttons) = ["ga", "gb", "gc", "ha", "hb", "hc", "ia", "ib", "ic"].