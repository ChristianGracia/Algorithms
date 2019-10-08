int firstDuplicate(int[] a) {
    Hashtable hash = new Hashtable();
    

    for(int i = 0; i < a.Length; i++){
        if (Array.IndexOf(a, a[i]) != Array.LastIndexOf(a, a[i]))
        {
            
            
       if (hash.Contains(a[i]))
           return a[i];
        }
        hash.Add(a[i], Array.LastIndexOf(a, a[i]) - Array.IndexOf(a, a[i]) );
    }
    return -1;
  
}