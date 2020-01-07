using System;

namespace LetterRepeater
{
    class Program
    {
        static void Main(string[] args)
        {
            string newString = "";
            Console.WriteLine("Enter a string to repeat each letter");
            string inputString = Console.ReadLine();

            Console.WriteLine("Enter how many times you want each letter repeated");
            int factor = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("word: " + inputString + "\nn = " + factor);

            for (int i = 0; i < inputString.Length; i++)
            {
                for (int j = 0; j < factor; j++)
                {
                    newString += inputString[i];

                }
            }
            Console.WriteLine("repeated stringn: " + newString);
        }
    }
}
