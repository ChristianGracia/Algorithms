char firstNotRepeatingCharacter(string s)
{
    char[] letters = s.ToCharArray();
    for (int i = 0; i < s.Length; i++)
    {
        if (Array.LastIndexOf(letters, letters[i]) == Array.IndexOf(letters, letters[i]))
        {
            return letters[i];
        }
    }
    return '_';

}

// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.
