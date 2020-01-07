using System;
using static System.Char;

namespace CheckUserDateFormat
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter date between 00:00 to 23:59");
            var inputString = Console.ReadLine();
            var dateChecker = DateChecker(inputString);

             var result = dateChecker == 1 ? "correct time format" : "incorrect time format";
             Console.WriteLine(result);
        }


        public static int DateChecker(string inputString)
        {
            var validFlag = 1;

            var dateInput = inputString.Split(":");

            if (dateInput.Length != 2 || dateInput[1].Length != 2 || dateInput[0].Length != 2)
                validFlag = 0;

            if (validFlag != 1) return validFlag;
            for (var i = 0; i <= 1; i++)
            {
                for (var j = 0; j <= 1; j++)
                {
                    if (IsLetter(dateInput[i][j]))
                        validFlag = 0;
                }
            }

            if (validFlag != 1) return validFlag;
            var hours = Convert.ToInt32(dateInput[0]);
            var minutes = Convert.ToInt32(dateInput[1]);

            if (hours > 23 || hours < 0 || minutes < 0 || minutes > 59)
            {
                validFlag = 0;
            }
            return validFlag;

        }
    }
}
        
