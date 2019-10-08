//top answer, passes all 23 checks

int firstDuplicate(int[] a)
{
    int[] array = new int[a.Length];
    
    for(int i = 0; i < a.Length; i++)
    {
        if (array[a[i] -1] == 0)
            array[a[i] -1] = 1;
        else
            return a[i];   
    }  
    return -1; 
}

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

//also works 21/23

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

//another 10/23
int firstDuplicate(int[] a)
{
    int[] array = new int[a.Length];
    
    for(int i = 1; i < a.Length; i++)
    {
        if (array[i -1] != 0)
            return a[i];
        array[i -1]++;
            
    }
    
    
    return -1;
    
}