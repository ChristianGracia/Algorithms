// create a program similar to contains duplicates that returns the first duplicate element found in the array.


var a = [1, 1, 4, 3, 5, 3, 7, 4, 4];

//faster function using map()


function firstDuplicate(a) {

    var arrMap = new Map();
    var check = 0;
    const val = 1;

    for (var i = 0; i < a.length; i++) {
        if (arrMap.has(a[i])) {
            check = a[i];
            return check;
        }
        else {
            arrMap.set(a[i], val);
        }

    }

    if (check > 0) {
        return check;
    }
    else return -1;

}




//slower

function doesContain(a) {
    function firstDuplicate(a) 
    {
        var size = a.length;

        for (var i = 0; i < size;) 
        {


            if (a.indexOf(a[i], i + 1) > -1) 
            {
                return a[i];
            }
            else i++;
        }
        return -1;
    }

}
