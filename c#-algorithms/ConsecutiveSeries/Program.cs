using System;

namespace ConsecutiveSeries
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Input consecutive numbers seperated by a hyphen");
            var series = Console.ReadLine();
            var result = ConsecutiveChecker(series);
            Console.WriteLine(result);
        }

        public static string ConsecutiveChecker(string series)
        {
            var result = "Consecutive! :)";

            var consecutiveFlag = 1;
            var numberArray = series.Split("-");

            for (var i = 0; i < numberArray.Length - 1; i++)
                if (Convert.ToInt32(numberArray[i]) != (Convert.ToInt32(numberArray[i + 1]) - 1))
                    consecutiveFlag = 0;

            if (consecutiveFlag == 0)
                result = "Not Consecutive :(";

            return result;
        }
    }
}