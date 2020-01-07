using System;

namespace NumberCheck
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Type any number:  "); 
            int number = Int32.Parse(Console.ReadLine());

            if (number > 10 || number < 0)
                Console.WriteLine("invalid");
            else
                Console.WriteLine("valid");
        }
    }
}
