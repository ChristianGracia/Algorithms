using System;

namespace DoubleLetterChecker
{
    class Program
    {
        static void Main(string[] args)
        {
            var boolFlag = false;
            Console.WriteLine("Enter a word to search for doubles!");
            var word = Console.ReadLine();
            Console.WriteLine("word: " + word);

            for (int i = 0; i < word.Length -1; i++)
            {
                if (word[i] == word[i + 1])
                   boolFlag = !boolFlag;

            }
            if (boolFlag)
                Console.WriteLine("Duplicates found. Word contains two of the same lettes in a row");
            else
                Console.WriteLine("No Duplicates letters in a row found");
        }
    }
}
