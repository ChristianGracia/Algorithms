int[] fractionReducing(int[] fraction) {
    
    int length = fraction[0];
    if (fraction[1] > fraction[0]){
        length = fraction[1];
    }
    for(int i = 2; i < length; i++){
        if(fraction[0] % i == 0 && fraction[1] % i == 0){
            fraction[0] = fraction[0] / i;
            fraction[1] = fraction[1] / i;
        }
    }
    return fraction;

}