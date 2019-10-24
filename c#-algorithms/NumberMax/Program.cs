using System;

namespace NumberMax
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a number: ");

            int firstNumber = Int32.Parse(Console.ReadLine());

            Console.WriteLine("A = " + firstNumber);

            Console.WriteLine("Enter another number: ");

            int secondNumber = Int32.Parse(Console.ReadLine());

            Console.WriteLine("B = " + secondNumber);
            bool flag = false;

            if (firstNumber > secondNumber)
                flag = true;

            var max = flag ? firstNumber : secondNumber;

            Console.WriteLine("The Higher Number is: " + max);
        }
    }
}
