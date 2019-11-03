boolean areSimilar(int[] a, int[] b) {
    
       if (Arrays.equals(a, b)){
        return true;
    }
    
    int counter = 0;
    
    for(int i = 0; i < a.length; i++){
        if (a[i] != b[i]){
            int swapFirst = a[i];
            counter++;
            if(counter > 2){
                return false;
            }
            
                for(int j = i + 1; j < a.length; j++){
                  
                    if(a[j] != b[j]){
                        int swapSecond = a[j];
                        int[] c = a;
                 
                        c[i] = swapSecond;
                        c[j] = swapFirst;

                        if (Arrays.equals(c, b)){
                             return true;
                         }
                        return false;
                        
                              
                    }
                }
    
            
        }
    }
    
    
    return false;

}