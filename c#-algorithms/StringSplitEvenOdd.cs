using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {

        int numberOfCases = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine(numberOfCases);

        for(int i = 0; i < numberOfCases; i++){
            string inputString = Console.ReadLine();
            string evenString = "";
            string oddString = "";
            for(int j = 0; j< inputString.Length;j++ ){
                if(j%2==0){
                    evenString += inputString[j];
                }
                else{
                    oddString += inputString[j];
                }


            }
            Console.WriteLine(evenString + " " + oddString);
        }
    }
}
