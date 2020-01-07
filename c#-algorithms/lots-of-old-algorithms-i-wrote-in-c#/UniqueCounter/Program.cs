using System;
using System.Collections.Generic;
using System.Text;

namespace UniqueCounter
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            var numbers = new List<string>();
            var uniques = UniqueReturner(numbers);
            Console.WriteLine("uniques numbers are: " + uniques);
        }

        public static string UniqueReturner(List<string> numbers)
        {
            var uniqueNumbers = new StringBuilder();

            do
            {
                Console.WriteLine("input numbers to count uniques");
                var number = Console.ReadLine();
                Console.WriteLine("type 'quit' to stop and sort");
                if (number == "quit")
                    break;
             

                if (numbers.Contains(number))
                    numbers.Remove(number);
                else
                {
                    numbers.Add(number);
                }

            } while (true);

            var uniqueCounter = 0;
            foreach (var number in numbers)
            {
                uniqueNumbers.Append(number + " ");
                uniqueCounter++;
            }
            uniqueNumbers.Append("\nunique number total: " + uniqueCounter);

            return uniqueNumbers.ToString();
        }
    }
}
