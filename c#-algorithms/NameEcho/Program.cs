using System;

namespace NameEcho
{
    class Program
    {
        static void Main(string[] args)
        {

            while (true)
            {

                Console.Write("Enter name: ");
                var name = Console.ReadLine();

                if (String.IsNullOrWhiteSpace(name))
                    break;
                else
                    Console.WriteLine("hi " + name);
            }

            
        }
    }
}
