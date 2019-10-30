bool almostIncreasingSequence(int[] sequence)
{
    bool decreaseCheck = false;

    for (int i = -1, j = 0, k = 1; k < sequence.Length; k++)
    {
        bool ignoreNumber = false;

        if (sequence[j] >= sequence[k])
        {
            if (decreaseCheck)
            {
                return false;
            }
            decreaseCheck = true;

            if (k > 1 && sequence[i] >= sequence[k])
            {
                ignoreNumber = true;
            }
        }

        if (!decreaseCheck)
        {
            i = j;
        }

        if (!ignoreNumber)
        {
            j = k;
        }
    }

    return true;

}