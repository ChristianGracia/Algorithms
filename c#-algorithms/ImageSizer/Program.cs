using System;

namespace imageDimensionChecker
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the width: ");
            var width = Int32.Parse(Console.ReadLine());
            Console.WriteLine("width is: " + width);

            Console.WriteLine("Enter the Length: ");
            var length = Int32.Parse(Console.ReadLine());
            Console.WriteLine("length is: " + length);

            var orientation = (width > length) ? width : length;

            if (orientation == width)
            {
                Console.WriteLine("That picture is in landscape mode");
            }
            else
                Console.WriteLine("That picture is in portrait mode");
        }
       
    }
    
}
