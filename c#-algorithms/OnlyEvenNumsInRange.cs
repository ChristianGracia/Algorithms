int[] onlyEvenNumbers(int left, int right)
{

    List<int> evenNumbers = new List<int>();

    for (int number = left; number <= right; number++)
    {
        if (number % 2 == 0)
            evenNumbers.Add(number);
    }
    return evenNumbers.ToArray();
}
