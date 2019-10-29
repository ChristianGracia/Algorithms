using System;

namespace MaxInASeries
{
    class Program
    {
        static void Main(string[] args)
        {
            var max = 0;
            Console.WriteLine("Input numbers seperated by a comma to find max: ");
            var answer = Console.ReadLine();
            var counter = 1;

            for (var i = 0; i < answer.Length; i++)
            {
                if (answer[i] == ',')
                    counter++;

            }
            var array = answer.Split(",");
            for (var i = 0; i < counter; i++)
            {
                var temp = Int32.Parse(array[i].Trim());
                if (temp > max)
                    max = temp;

            }
            Console.WriteLine("max is: " + max);
        }
    }
}
