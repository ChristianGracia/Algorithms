int mirrorBits(int a)
{
    string binaryString = Convert.ToString(a, 2);
    string reversedString = "";


    for (int index = binaryString.Length - 1; index >= 0; index--)
    {
        reversedString += binaryString[index];

    }


    Console.WriteLine(binaryString);
    Console.WriteLine(reversedString);
    return Convert.ToInt32(reversedString, 2);

}

// Reverse the order of the bits in a given integer.

// Example

// For a = 97, the output should be
// mirrorBits(a) = 67.

// 97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

// For a = 8, the output should be
// mirrorBits(a) = 1.