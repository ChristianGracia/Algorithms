using System;
using System.IO;

namespace FindLongestWord
{
    internal class Program
    {
        public static void Main(string[] args)

        {
            string path = "";
            do
            {
                Console.WriteLine("Enter the path of a file to find the longest word\n");
                path += Console.ReadLine();
            } while (path == "");

            string longestWord = LetterCounter(path);
            Console.WriteLine(longestWord);
        }

        public static string LetterCounter(string path)
        {
            string[] textArray = File.ReadAllText(path).Split('\n');

            string longestWord = "";

            foreach (string line in textArray)
            {
                foreach (string word in line.Split(" "))
                {
                    if (word.Length > longestWord.Length)
                        longestWord = word;
                }
            }

            string result = "Longest word = " + longestWord;

            return result;
        }
    }
}
