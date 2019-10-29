using System;
using System.Collections.Generic;
using System.Net.NetworkInformation;

namespace SeriesMinReducer
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = SeriesChecker();
            var checkMinResults = CheckMin(numbers);
            Console.WriteLine(checkMinResults);
        }

        static List<int> SeriesChecker()
        {
            var numbers = new List<int>();

            while (true)
            {
                Console.WriteLine("Enter a series of at least 5 numbers to find the 3 lowest: ");
                var answer = Console.ReadLine().Split(',');

                foreach (var x in answer)
                    numbers.Add(Int32.Parse(x.Trim()));

                if (numbers.Count > 4)
                    break;
                Console.WriteLine("\nInvalid List!\n");
            }

            return numbers;
        }

        static string CheckMin(List<int> numbers)
        {
            var array = new int[numbers.Count];
            var result = "";

            for (var i = 0; i < numbers.Count; i++)
            {
                array[i] = numbers[i];
            }

            Array.Sort(array);

            var minArray = new int[3];
            Array.Copy(array, minArray, 3);

            result += "'";

            var counter = 0;
            foreach (var x in minArray)
            {
                if (counter != 0)
                    result += ", " + x.ToString();
                else
                {
                    counter++;
                    result += x;
                }
            }
            result += "'";
            result += " are the minimums";
            return result;
        }
    }
}
