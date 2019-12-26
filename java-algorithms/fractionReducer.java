int[] fractionReducing(int[] fraction) {
    for(int i = 2; i < fraction[1]; i++){
        if(fraction[0] % i == 0 && fraction[1] % i == 0){
            fraction[0] = fraction[0] / i;
            fraction[1] = fraction[1] / i;
        }
    }
    return fraction;

}
