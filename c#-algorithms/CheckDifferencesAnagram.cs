int createAnagram(string s, string t)
{
    int counter = 0;

    int[] lettersString1 = new int[26];
    int[] lettersString2 = new int[26];

    for (int i = 0; i < s.Length; i++)
    {
        lettersString1[Convert.ToInt32(s[i]) - 65]++;
        lettersString2[Convert.ToInt32(t[i]) - 65]++;
    }
    for (int i = 0; i < 26; i++)
    {
        if (lettersString1[i] != lettersString2[i])
        {
            counter += Math.Abs(lettersString1[i] - lettersString2[i]);
        }
    }
    return counter /= 2;

}


// You are given two strings s and t of the same length, consisting of uppercase English letters.Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

// Example

// For s = "AABAA" and t = "BBAAA", the output should be
// createAnagram(s, t) = 1;
// For s = "OVGHK" and t = "RPGUC", the output should be
// createAnagram(s, t) = 4.
// Input/Output

// [execution time limit] 3 seconds(cs)

// [input]
// string s

// Guaranteed constraints:
// 5 ≤ s.length ≤ 35.

// [input]
// string t

// Guaranteed constraints:
// t.length = s.length.

// [output] integer

// The minimum number of replacement operations needed to get an anagram of the string t from the string s.