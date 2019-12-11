using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        int numberOfArgs = Convert.ToInt32(Console.ReadLine());

        Dictionary<string,string> dictionary = new Dictionary<string, string>();

        for(int i = 0; i < numberOfArgs; i++){
            string[] inputString = Console.ReadLine().Split();
            dictionary.Add(inputString[0], inputString[1]);
        }



        List<string> nameList = new List<string>();

      string name = "";
     while (!string.IsNullOrEmpty(name = Console.ReadLine())){
        nameList.Add(name);
      }

      foreach(string names in nameList){
          Console.WriteLine(names);
      }
          

        
    }

}


