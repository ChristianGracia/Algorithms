using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution
{



    static void Main(string[] args)
    {
        int[][] arr = new int[6][];
        int max = 0;

        for (int i = 0; i < 6; i++)
        {
            arr[i] = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));
        }

        for (int i = 0; i < 4; i++)
        {
            for (int k = 0; k < 4; k++)
            {
                int count = 0;
                for (int l = k; l < k + 3; l++)
                {
                    count += arr[i][l];
                    count += arr[i + 2][l];
                }
                count += arr[i + 1][k + 1];

                if (count > max)
                {
                    max = count;
                }
            }


        }
        Console.WriteLine(max);



    }
}