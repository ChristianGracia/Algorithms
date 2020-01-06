int killKthBit(int n, int k)
{
    string result = Convert.ToString(n, 2).Split("");

    for (int i = 0; i < result.Length; i++)
    {
        Console.WriteLine(result[i]);
    }


    return 0;
}