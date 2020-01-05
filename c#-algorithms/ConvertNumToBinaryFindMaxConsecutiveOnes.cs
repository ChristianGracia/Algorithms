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
        int number = Convert.ToInt32(Console.ReadLine());
        int[] binaryArr = new int[50];
        int i;
        for (i = 0; number > 0; i++)
        {
            binaryArr[i] = number % 2;
            number = number / 2;
        }

        int count = 0;
        int mostConsecutiveOnes = 0;

        for (int j = 0; j < 50; j++)
        {

            if (binaryArr[j] == 1)
            {
                count++;
                if (count > mostConsecutiveOnes)
                {
                    mostConsecutiveOnes = count;
                }
            }
            else
            {
                count = 0;
            }

        }
        Console.WriteLine(mostConsecutiveOnes);
    }
}