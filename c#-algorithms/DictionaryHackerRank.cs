using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        int numberOfArgs = Convert.ToInt32(Console.ReadLine());

        Dictionary<int,string> dictionary = new Dictionary<int, string>();

        for(int i = 0; i < numberOfArgs; i++){
            string[] inputString = Console.ReadLine().Split();
            Console.WriteLine(inputString[0]);
            Console.WriteLine(inputString[1]);


        }
    }
}
