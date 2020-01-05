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
        int maxHourglassSum = -10000;

        for (int i = 0; i < 6; i++)
        {
            arr[i] = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));
        }

        for (int rows = 0; rows < 4; rows++)
        {
            for (int start = 0; start < 4; start++)
            {
                int count = 0;
                for (int next = start; next < start + 3; next++)
                {
                    count += arr[rows][next];
                    count += arr[rows + 2][next];
                }
                count += arr[rows + 1][start + 1];

                if (count > maxHourglassSum)
                {
                    maxHourglassSum = count;
                }
            }
        }
        Console.WriteLine(max);
    }
}