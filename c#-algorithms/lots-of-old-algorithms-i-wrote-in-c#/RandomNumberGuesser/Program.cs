using System;

namespace RandomNumberGuesser
{
    class Program
    {
        static void Main(string[] args)
        {
            var random = new Random();
            var randomNumber = random.Next(1, 10);

            var counter = 0;
            while (counter < 4)
            {
                Console.WriteLine("Guess the number between 1-10");
                var guess = Int32.Parse(Console.ReadLine());

                if (guess == randomNumber)
                {
                    Console.WriteLine("correct!!!");
                    break;
                }

                else
                
                {
                    Console.WriteLine("wrong!!!");
                    if (counter == 3)
                        Console.WriteLine("you lost!!!");
                    counter++;
                }
            }

        }
    }
}
