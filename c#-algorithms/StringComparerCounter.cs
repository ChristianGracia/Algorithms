int stringsConstruction(string a, string b)
{
    int counter = 0;
    int[] letters = new int[26];

    foreach (char letter in b)
    {
        int letterIndex = System.Convert.ToInt32(letter) - 97;
        letters[letterIndex]++;

    }

    while (true)
    {
        for (int index = 0; index < a.Length; index++)
        {
            int letterIndex = System.Convert.ToInt32(a[index]) - 97;
            if (letters[letterIndex] > 0)
            {
                letters[letterIndex]--;
            }
            else
            {
                return counter;
            }

        }
        counter++;

    }
}

// Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only.

// Example

// For a = "abc" and b = "abccba", the output should be stringsConstruction(a, b) = 2.

// We can construct 2 strings a = "abc" using only letters from the string b.

// For a = "ab" and b = "abcbcb", the output should be stringsConstruction(a, b) = 1.