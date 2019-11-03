int arrayChange(int[] inputArray) {
    int[] a = inputArray;
     
    int counter = 0;
    for(int i = 1; i < inputArray.length; i++){
    
        if(a[i] <= a[i - 1] ){
            while(a[i] <= a[i -1]){
                counter++;
                a[i] = a[i] +1;
                
            }
        }
        
        for(int item : a){
            System.out.println(item);
        }
        
    
        
    }
    return counter;

}