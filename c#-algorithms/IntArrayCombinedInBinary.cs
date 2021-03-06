//refactored and nested loops
int rangeBitCount(int a, int b)
{

    string[] binaryStrings = new string[b - a + 1];

    int count = 0;

    for (int index = 0, start = a; start <= b; index++, start++)
    {
        string numberString = Convert.ToString(start, 2).PadLeft(8, '0');
        for (int bitIndex = 0; bitIndex < numberString.Length; bitIndex++)
        {
            if (numberString[bitIndex] == '1')
            {
                count++;
            }
        }
    }
    return count;
}


//first solution
int rangeBitCount(int a, int b)
{

    string[] binaryStrings = new string[b - a + 1];

    int count = 0;


    for (int index = 0, start = a; start <= b; index++, start++)
    {
        binaryStrings[index] = Convert.ToString(start, 2).PadLeft(8, '0');
        Console.WriteLine(start);

    }

    foreach (string item in binaryStrings)
    {
        for (int index = 0; index < item.Length; index++)
        {
            if (item[index] == '1')
            {
                count++;
            }
        }


    }

    return count;

}
// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.

// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer.For further clarification see the following example.

// Example

// For a = [24, 85, 0], the output should be
// arrayPacking(a) = 21784.

// An array[24, 85, 0] looks like[00011000, 01010101, 00000000] in binary.
// After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784.