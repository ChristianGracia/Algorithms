using System;

namespace RemainderCount
{
    class Program
    {
        static void Main(string[] args)
        {
            var divisor = 0;
            for (var i = 1; i < 100; i++)
            {
                if (i % 3 == 0)
                    divisor++;
            }
            Console.WriteLine("There are " + divisor + " divsors");

        }
    }
}
