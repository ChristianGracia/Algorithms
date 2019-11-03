int arrayChange(int[] inputArray) {
    int[] a = inputArray;
     
    int counter = 0;
    for(int i = 1; i < inputArray.length; i++){
            while(a[i] <= a[i -1]){
                counter++;
                a[i]++;
                
            }
    }
    return counter;
}
