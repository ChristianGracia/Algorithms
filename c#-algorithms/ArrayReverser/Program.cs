using System;
using System.Linq;

namespace ArrayReverser
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter name to be reversed");
            var word = Console.ReadLine();
            var reversedWord = ReverseString(word);
            Console.WriteLine("reversed word is: " + reversedWord);
        }

        public static string ReverseString(string name)
        {
            var length = name.Length;
            var array = new char[length];

            for (var i = 0; i < length; i++)
            {
                array[i] = name[i];
            }
            Array.Reverse(array);
            var reversedString = array.Aggregate("", (current, item) => current + (char)item);

            return reversedString;

        }
    }
}