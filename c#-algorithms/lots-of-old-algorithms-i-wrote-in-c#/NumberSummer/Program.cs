using System;

namespace NumberSummer
{
    class Program
    {
        static void Main(string[] args)
        {
            int sum = 0;
            while (true)
            {
                Console.WriteLine("Enter a number to add to sum");
                int number = Console.ReadLine();

                if (number == "ok")
                {
                    Console.WriteLine("sum is: " + sum);
                    break;
                }

                sum += Int32.Parse(number);

                Console.WriteLine("number added is " + number + "\n type ok to stop and see sum");
            }
        }
    }
}
