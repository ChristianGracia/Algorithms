bool isSubstitutionCipher(string string1, string string2)
{

    int[] letterArr = new int[26];
    for (int i = 0; i < string1.Length; i++)
    {
        Console.WriteLine(string1[i]);


    }

}


// A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters.For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

// A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e.having the same index) letter of some ciphertext alphabet.

// Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

// Example

// For string1 = "aacb" and string2 = "aabc", the output should be
// isSubstitutionCipher(string1, string2) = true.

// Any ciphertext alphabet that starts with acb... would make this transformation possible.

// For string1 = "aa" and string2 = "bc", the output should be
// isSubstitutionCipher(string1, string2) = false.

// Input / Output

// [execution time limit] 3 seconds (cs)

// [input] string string1

// A string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ string1.length ≤ 10.

// [input] string string2

// A string consisting of lowercase English characters of the same length as string1.

// Guaranteed constraints:
// string2.length = string1.length.

// [output] boolean