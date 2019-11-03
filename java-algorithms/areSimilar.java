boolean areSimilar(int[] a, int[] b) {
    Boolean aCheck = true;
    Boolean bCheck = true;
    
    for(int i = 0; i < a.length; i++){
            for(int j = i+1; j < a.length -1; j++){ 
                int temp = a[i];
                
                a[i] = a[j];
                a[j] = temp;
                System.out.println(a);
                if (a == b){
                    return true;
                }
                else {
                     temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
               
                    
                }
            }
        
    }
    
      
    for(int l = 0; l < b.length; l++){
            for(int m = l+1; m < b.length; m++){ 
                int temp = b[l];
                
                b[l] = b[m];
                b[m] = temp;
                if (a == b){
                    return true;
                }
                else {
                     temp = b[l];
                    b[l] = b[m];
                    b[m] = temp;
               
                    
                }
            }
        
    }
    return false;
}