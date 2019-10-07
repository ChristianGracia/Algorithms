int firstDuplicate(int[] a) {
    int b = 0;
    
    for(int i =0; i < a.Length; i++){
        if (Array.IndexOf(a, a[i]) != Array.LastIndexOf(a, a[i]))
            b = a[i];
    }
    
    if (b > 0)
        return b;
    else
        return -1;

}