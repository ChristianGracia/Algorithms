using System;

namespace Factorializer
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the number to get the factorial of: ");
            var number = Console.ReadLine();
            var range = Int32.Parse(number);
            var total = range;

            Console.WriteLine("length = " + range);

                for (var i = (range-1); i > 0; i--)
                {
                total = total * i;
                Console.WriteLine(total);
                }
            Console.WriteLine(number + "! = " + total);
            
        }
    }
}
