int stringsConstruction(string a, string b)
{
    List<char> letters = new List<char>();
    int counter = 0;
    foreach (char letter in b)
    {
        letters.Add(letter);
    }
    foreach (char letter in b)
    {
        Console.WriteLine(letter);
    }
    for (int i = 0; i < a.Length; i++)
    {
        if (i == a.Length - 1)
        {
            counter++;


        }
        if (letters.Contains(a[i]))
        {
            letters.Remove(a[i]);
        }

    }
    return counter;


}