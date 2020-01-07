using System;
using System.Linq;

namespace ArrayReverser
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter name to be reversed");
            string word = Console.ReadLine();
            string reversedWord = ReverseString(word);
            Console.WriteLine("reversed word is: " + reversedWord);
        }

        public static string ReverseString(string name)
        {
            int length = name.Length;
            char[] array = new char[length];

            for (var i = 0; i < length; i++)
            {
                array[i] = name[i];
            }
            Array.Reverse(array);
            string reversedString = array.Aggregate("", (current, item) => current + (char)item);

            return reversedString;

        }
    }
}