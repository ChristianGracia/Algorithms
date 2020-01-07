using System;

namespace sortUniques
{
    public class Program
    {
        static void Main(string[] args)
        {
            var userInput = UserInput();
            var sortedArray = ArraySorter(userInput);
            Console.WriteLine(sortedArray);
        }

        static string ArraySorter(int[] numbers)
        {
            Array.Sort(numbers);

            var result = "";

            foreach (var x in numbers) result += x.ToString();

            return result;
        }

        static int[] UserInput()
        {
            int[] numbers = new int[5];

            for (var x = 0; x < 5;)
            {
                Console.WriteLine("Put 5 unique numbers to be sorted: ");
                var number = Int32.Parse(Console.ReadLine());

                if (Array.IndexOf(numbers, number) < 0)
                {
                    numbers[x] = number;
                    x++;
                }

                else
                    Console.WriteLine("invalid input, please put in unique name");
            }

            return numbers;
        }
    }
}