using System;
using System.IO;

namespace  FindLongestWord
{
    internal class Program
    {
        public static void Main(string[] args)

        {
            var path = "";
            do
            {
                Console.WriteLine("Enter the path of a file to find the longest word\n");
                path += Console.ReadLine();
            } while (path == "");

            var longestWord = LetterCounter(path);
            Console.WriteLine(longestWord);
        }

        public static string LetterCounter(string path)
        {
            var fileArray = File.ReadAllText(path).Split('\n');

            var longestWord = "";

            foreach (var array in fileArray)
            {
                foreach (var word in array.Split(" "))
                {
                    if (word.Length > longestWord.Length)
                        longestWord = word;
                }
            }

            var result = "Longest word = " + longestWord;

            return result;
        }
    }
}
