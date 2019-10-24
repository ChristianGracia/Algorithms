using System;
using System.Linq;

namespace PascalCaser
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter string to be converted to Pascale Case");
            var inputString = Console.ReadLine().ToLower();
            var pascalCaseString = PascalFunction(inputString);
            Console.WriteLine(pascalCaseString);
        }

        static string PascalFunction(string inputString)
        {
            var stringArray = inputString.Split(" ");

            for (var i = 0; i < stringArray.Length; i++)
            {
                stringArray[i] = stringArray[i].Substring(0, 1).ToUpper() + stringArray[i].Substring(1);
            }
            return stringArray.Aggregate("", (current, item) => current + item);
        }
   
    }
}
