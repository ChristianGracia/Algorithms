int[] sortByHeight(int[] a) {
 int intArray[] = new int[a.length];
 int unSortedArray[] = new int[a.length];
 int counter = 0;
 for (int i = 0; i < a.length; i++) {
  if (a[i] == -1) {
   intArray[i] = a[i];
  } else {
   intArray[i] = 0;
   counter++;
   unSortedArray[counter - 1] = a[i];
  }

 }
 for (int l = 0; l < counter - 1; l++)
  for (int j = 0; j < counter - l - 1; j++)
   if (unSortedArray[j] > unSortedArray[j + 1]) {
    int temp = 0;
    temp = unSortedArray[j];
    unSortedArray[j] = unSortedArray[j + 1];
    unSortedArray[j + 1] = temp;

   }
    int m = 0;
    
    for(int h = 0; h < a.length; h++){
        if (a[h] != -1)
        {
            a[h] = unSortedArray[m];
            m++;
        }
    }


 return a;

}