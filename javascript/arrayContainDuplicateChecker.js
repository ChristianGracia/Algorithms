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


//added alt solution that is faster

function containsDuplicates(a) 
{
    var seen = {}
    
    for (let num = 0; num < a.length; num++){
        if (seen[a[num]]== true){
            return true;
        }
        seen[a[num]] = true;
    }
    return false;
}

