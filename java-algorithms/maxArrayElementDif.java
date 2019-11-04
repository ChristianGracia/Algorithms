int arrayMaximalAdjacentDifference(int[] inputArray) {
    int dif = 0;
    for(int i = 1; i < inputArray.length; i++){
        int sum = Math.abs(inputArray[i] - inputArray[i - 1]);
        if (sum > dif){
            dif = sum;
        }
    }
      return dif;
}
