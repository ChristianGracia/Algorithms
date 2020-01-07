using System;

namespace Mario
{
    class Program
    {
        static void Main(string[] args)
        {
            int height;
            Console.WriteLine("Input a height to generate\n");
            String input = Console.ReadLine();

            while (!Int32.TryParse(input, out height) || height > 10 || height < 1)
            {
                Console.WriteLine("Please put in a number between 1 and 10");
                input = Console.ReadLine();
            }
            Console.WriteLine("height: " + height);


            var spaceNumber = height;

            for (var rows = 0; rows < height + 1; rows++)
            {
                for (var spaces = spaceNumber; spaces > 0; spaces--)
                    Console.Write(" ");

                for (var hashes = 0; hashes < rows; hashes++)
                    Console.Write("#");

                Console.Write("  ");

                for (var hashes2 = 0; hashes2 < rows; hashes2++)
                    Console.Write("#");

                Console.WriteLine("");
                spaceNumber--;
            }
        }
    }
}
