int fixedPointsPermutation(int[] permutation) {
    
    int counter = 0;
    
    for (int i = 0; i < permutation.length; i++){
        if(permutation[i] == i+1){
            counter++;
        }
    }
    return counter;

}
