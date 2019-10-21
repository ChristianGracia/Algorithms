function sumOfTwo(a, b, v) {
    
    for (var i = 0; i < a.length; i++){
        if( b.indexOf(v - a[i]) > -1){
            return true;
        }
    }
    return false;

}