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

//with list

int firstDuplicate(int[] a)
{
    List<int> list = new List<int>();

    for (int i = 0; i < a.Length; i++)
    {
        if (list.Contains(a[i]))
            return a[i];
        if (Array.IndexOf(a, a[i]) != Array.LastIndexOf(a, a[i]))
        {

            list.Add(a[i]);

        }
    }
    return -1;
}

//also works

int firstDuplicate(int[] a)
{
    for(int i = 0; i < a.Length; i++)
    {
        if (Array.IndexOf(a, -a[i]) > -1){
            return a[i];
        }
        a[i] = -1 * a[i];
    }
    return -1;
}