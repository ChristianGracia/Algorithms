int[] onlyEvenNumbers(int left, int right) {
    
    ArrayList<Integer> evenNumbers = new ArrayList<Integer>();
    
    for(int number = left; number <= right; number++){
        if(number % 2 == 0){
            evenNumbers.add(number);
            System.out.println(number);
        }
        
    }

    
    int[] numArray = new int[evenNumbers.size()];
    
    for(int i = 0; i < evenNumbers.size(); i++){
        numArray[i] = evenNumbers.get(i);
    }
return numArray;

}
