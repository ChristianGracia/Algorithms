int[] sortByHeight(int[] a) {
    
    while(true){
    for(int i = 0; i < a.length; i++){
        
    }
        
        Boolean check = true;
    for(int j = 0; j < a.length -1; j++){
        if (a[j] < a[j + 1]){
            check = false;
        }
    }  
        
        if(check){
            break;
        }
    }
    return a;


}

int[] sortByHeight(int[] a) {
    int intArray[] = new int[a.length];
    for(int i = 0; i < a.length;i++){
        if(intArray[i] == -1){
                 intArray[i] = a[i];
        }
        else {
            intArray[i] = 0;
        }
   
    }
    return intArray;

}
