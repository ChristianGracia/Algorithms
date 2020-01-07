using System;

namespace MaxInASeries
{
    class Program
    {
        static void Main(string[] args)
        {
            int max = 0;
            Console.WriteLine("Input numbers seperated by a comma to find max: ");
            string answer = Console.ReadLine();
            int counter = 1;

            for (int i = 0; i < answer.Length; i++)
            {
                if (answer[i] == ',')
                    counter++;

            }
            string[] stringArray = answer.Split(",");
            for (int i = 0; i < counter; i++)
            {
                int temp = Int32.Parse(stringArray[i].Trim());
                if (temp > max)
                    max = temp;

            }
            Console.WriteLine("max is: " + max);
        }
    }
}
