using System;

namespace OddNumberDeleter
{
    class Program
    {
        static void Main(string[] args)
        {

            var oddsRemovedString = "";
            Console.WriteLine("Enter a series of numbers seperated by commas for the odd numbers to be removed");
            var inputSeries = Console.ReadLine().Split(",");

           for (var i = 0; i < inputSeries.Length; i++)
            {
                inputSeries[i] = inputSeries[i].Trim();
                if ((Convert.ToInt32(inputSeries[i]) & 1) == 0)
                {
                    oddsRemovedString += inputSeries[i];
                    oddsRemovedString += ", ";
                }
            }
           if (oddsRemovedString.Length > 0)
                Console.WriteLine("Series with odds removed: " + oddsRemovedString.Substring(0, oddsRemovedString.Length - 2));
           else
                Console.WriteLine("no even numbers");
        }
    }
}
