public class Solution {
    public int[] SortedSquares(int[] A) {
        
         int[] squareArr = new int[A.Length];
        for (int i = 0; i < A.Length; i++){
            squareArr[i] = (int) Math.Pow(A[i], 2);
        }
        foreach(int item in squareArr){
            Console.WriteLine(item);
        }
        
        return squareArr;
        
        
    }
}