int phoneCall(int min1, int min2_10, int min11, int s) {
    if(s < min1){
        return 0;
    }
    int total = 1;
    
    s = s - min1;
    
    if(s>0){
        int counter = 2;
        while(counter < 11 && s >= min2_10 ){
            total = total +1;
            counter++;
            s = s-min2_10;
            
        }
        
        while( s >= min11 && counter == 11 ){
            total = total +1;
            s = s-min11;
            
        }
    }
    return total;
    
    
}

// 0 1 2 3 4 5 6 7 8 9 10 
// 2 3 4 5 6 7 8 9 10 11
