int stringsConstruction(string a, string b)
{
    int counter = 0;
    int[] letters = new int[26];

    foreach (char c in b)
    {
        int letterIndex = System.Convert.ToInt32(c) - 97;
        letters[letterIndex]++;

    }

    while (true)
    {
        for (int i = 0; i < a.Length; i++)
        {
            int letterIndex = System.Convert.ToInt32(a[i]) - 97;
            if (letters[letterIndex] > 0)
            {
                letters[letterIndex]--;
            }
            else
            {
                return counter;
            }

        }
        counter++;

    }



    return counter;

}