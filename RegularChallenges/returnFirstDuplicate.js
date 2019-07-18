// create a program similar to contains duplicates that returns the first duplicate element found in the array.


var a = [1, 1, 4, 3, 5, 3, 7, 4, 4];



function doesContain(a){
    
    var size = a.length;
    
    for ( var i = 0; i < size;){
       
       
       if(a.indexOf(a[i], i +1) > -1){
           console.log(a[i]);
           return 0;
       }
       else i ++;
    }
}


doesContain(a);

// function doesContain(a) {
//     var check1 = 0;
//     var check = 0;
    
//     for (var i = 0; i < a.length; i++) {
//         if (a.indexOf(a[i], i + 1) > -1) {
//             check1 = a[i];
            
            
//             if (a.indexOf(a[i]) < a.indexOf(check)){
//                 check = check1;
//             }
//         }
//     }
//     return check1;

// }

// console.log(doesContain(a));