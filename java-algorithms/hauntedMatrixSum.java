int matrixElementsSum(int[][] matrix) {


 for (int i = 0; i < matrix.length; i++) {
  for (int j = 0; j < matrix[i].length; j++) {
   if (matrix[i][j] == 0) {
    for (int k = i + 1; k < matrix.length; k++) {
     matrix[k][j] = 0;
    }
   }
  }

 }

 int sum = 0;

 for (int i = 0; i < matrix.length; i++) {
  for (int j = 0; j < matrix[i].length; j++) {
   sum += matrix[i][j];

  }
 }



 return sum;


}