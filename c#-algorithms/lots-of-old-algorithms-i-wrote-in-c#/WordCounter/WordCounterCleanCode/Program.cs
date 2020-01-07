using System;
using System.IO;

namespace WordCounterCleanCode
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            var path = "";
            do
            {
                Console.WriteLine("Enter the path of a file to find total words in file:\n");
                path = Console.ReadLine();

            } while (path == "");

            var getWordCount = WordCounter(path);
            Console.WriteLine(getWordCount);
        }

        public static string WordCounter(string path)
        {
            var wordArray = File.ReadAllText(path).Split("\n");

            var wordCounter = 0;

            foreach (var fileWord in wordArray)
            {

                foreach (var word in fileWord.Split(" "))
                {
                    if (word.Trim().Length > 0)
                        wordCounter++;
                }
            }

            string wordCount = "Word Count = " + wordCounter;
            return wordCount;
        }
    }
}
