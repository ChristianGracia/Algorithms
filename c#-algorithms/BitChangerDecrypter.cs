int killKthBit(int n, int k)
{
    char[] result = Convert.ToString(n, 2).ToCharArray();
    int length = result.Length;

    string newString = "";

    for (int index = 0; index < length; index++)
    {
        if (index == length - k)
        {
            newString += "0";
        }
        else
        {
            newString += result[index].ToString();
        }
    }
    return Convert.ToInt32(newString, 2);
}

int killKthBit(int n, int k)
{
    return n & ~(1 << (k - 1));
}

