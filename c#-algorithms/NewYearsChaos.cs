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
    static void minimumBribes(int[] q)
    {
        int count = 0;
        bool chaoticCheck = false;
        int temp;

        for (int k = 0; k < q.Length; k++)
        {
            if ((k + 1 - q[k]) < -2)
            {
                Console.WriteLine("Too chaotic");
                chaoticCheck = true;
                break;
            }
        }
        if (chaoticCheck == false)
        {
            for (int j = 0; j < q.Length; j++)
            {
                for (int i = 1; i < q.Length; i++)
                {
                    if (q[i] < q[i - 1])
                    {
                        temp = q[i - 1];
                        q[i - 1] = q[i];
                        q[i] = temp;
                        count++;
                    }

                }
            }
            Console.WriteLine(count);
        }
    }

    static void Main(string[] args)
    {
        int t = Convert.ToInt32(Console.ReadLine());

        for (int tItr = 0; tItr < t; tItr++)
        {
            int n = Convert.ToInt32(Console.ReadLine());

            int[] q = Array.ConvertAll(Console.ReadLine().Split(' '), qTemp => Convert.ToInt32(qTemp))
            ;
            minimumBribes(q);
        }
    }
}