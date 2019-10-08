int firstDuplicate(int[] a)
{
    Hashtable hash = new Hashtable();

    for (int i = 0; i < a.Length; i++)
    {
        if (Array.IndexOf(a, a[i]) != Array.LastIndexOf(a, a[i]))
        {
            if (hash.Contains(a[i]))
                return a[i];
        }
        hash.Add(a[i], Array.LastIndexOf(a, a[i]) - Array.IndexOf(a, a[i]));
    }
    return -1;
}

//second with dictionary
int firstDuplicate(int[] a)
{
    Dictionary<int, int> dictionary = new Dictionary<int, int>();

    for (int i = 0; i < a.Length; i++)
    {
        if (Array.IndexOf(a, a[i]) != Array.LastIndexOf(a, a[i]))
        {
            if (dictionary.ContainsKey(a[i]))
                return a[i];
            dictionary.Add(a[i], a[i]);
        }
    }
    return -1;
}