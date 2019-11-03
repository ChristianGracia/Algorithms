int[] alternatingSums(int[] a) {
    int sumOdd = 0;
    int sumEven = 0;
    int counter = 2;
    
    for (int item : a)
{ 
        if(counter % 2 == 0){
            sumEven += item;
        }
        else{
            sumOdd += item;
        }
        counter++;
    
}
    int[] array = new int[2];
    array[0] = sumEven;
    array[1] = sumOdd;
    return array;
    

}