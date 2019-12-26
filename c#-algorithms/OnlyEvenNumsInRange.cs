int[] onlyEvenNumbers(int left, int right)
{

    List<int> numbers = new List<int>();

    for (int i = left; i <= right; i++)
    {
        if (i % 2 == 0)
        {
            numbers.Add(i);
        }
    }
    return numbers.ToArray();

}
