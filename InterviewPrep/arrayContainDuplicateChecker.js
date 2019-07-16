function containsDuplicates(a) 
{
    
    var size = a.length;
    for (var i = 0; i < size; i++)
    {
        if (a.indexOf(a[i], i + 1) > -1){
            return true;
        }
    }
    return false;
}
