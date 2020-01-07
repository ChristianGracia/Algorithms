using System;

namespace SpeedChecker
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Input speed limit: ");
            var speedLimit = Int32.Parse(Console.ReadLine());
            Console.WriteLine("Speed limit is " + speedLimit + " MPH");

            Console.WriteLine("\n\nInput car to be validated MPH: ");
            var speedSeen = Int32.Parse(Console.ReadLine());
            Console.WriteLine("Reported " + speedSeen + " MPH");
            var result = SpeedValidity(speedLimit, speedSeen);
            Console.WriteLine(result);
        }

        public static string SpeedValidity(int speedLimit, int speedSeen)
        {
            var result = "";
            if (speedSeen < speedLimit)
                return result = "\nLegal speed";
            else
            {
                var difference = Math.Abs(speedLimit - speedSeen);

                var demerits = difference / 5;
                if (demerits > 12)
                    return result = "Too high!\nLicense Suspended";
                else
                    return result = "Demerits: " + demerits;
            }
        }
    }
}