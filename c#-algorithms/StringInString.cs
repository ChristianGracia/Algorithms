int strstr(string s, string x)
{

    for (int i = 0, j = 0; i < s.Length; i++)
    {
        if (s[i] == x[j])
        {
            j++;
            if (j == x.Length)
            {
                return i - x.Length + 1;
            }
        }
        else
        {
            j = 0;
        }

    }

    return -1;


}

int strstr(string s, string x)
{
    int counter = 0;
    int index = 0;
    foreach (char letter in s)
    {
        index++;
        if (letter == x[counter])
        {
            counter++;
            if (counter == x.Length - 1)
            {
                return index - counter;
            }
        }
        else
        {
            counter = 0;
        }
    }
    return -1;


}


// Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

// Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.

// Example

// For s = "CodefightsIsAwesome" and x = "IA", the output should be
// strstr(s, x) = -1;
// For s = "CodefightsIsAwesome" and x = "IsA", the output should be
// strstr(s, x) = 10.