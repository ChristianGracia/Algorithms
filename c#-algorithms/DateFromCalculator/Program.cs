using System;

namespace DateFromNow
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter old date: ");
            Console.WriteLine("seperated by hyphens ex. (12-12-2010)");

            var daysAgo = 0;
      
            var oldDate = Console.ReadLine();
            var oldDateArray = oldDate.Split("-");

            if (oldDateArray.Length > 2)
            {

                var oldYear = Convert.ToInt32(oldDateArray[2]);
                var oldMonth = Convert.ToInt32(oldDateArray[0]);
                var oldDay = Convert.ToInt32(oldDateArray[1]);
                Console.WriteLine("old date: " + oldYear + "/"+ oldMonth + "/"+ oldDay);

                var currentDate = DateTime.Now.ToString();
                var currentDateArray = currentDate.Split("/");

                var year = Convert.ToInt32(currentDateArray[2].Substring(0, 4));
                var month = Convert.ToInt32(currentDateArray[0]);
                var day = Convert.ToInt32(currentDateArray[1]);

                Console.WriteLine("year: " + year + "\nmonth: " + month + "\nday: " + day);

                    var yearDifference = (year - oldYear) * 365;
                 
                    daysAgo += yearDifference;

                    var monthDifference = (month - oldMonth) * 30;
                    daysAgo += monthDifference;

                    var dayDifference = day - oldDay;
                    daysAgo += dayDifference;

                Console.WriteLine("day difference is " + daysAgo);
            }
            else
            {
                Console.WriteLine("incorrect usage\nPlease enter a date seperated by hypens");
            }
        }
    }
}
