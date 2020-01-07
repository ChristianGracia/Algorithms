using System;
using System.Collections.Generic;

namespace FriendsList
{
    class Program
    {
        static void Main(string[] args)
        {
            var names = new List<string>();
            
            while (true)
            {
                Console.WriteLine("Enter as name: ");
                var name = Console.ReadLine();
                names.Add(name);
   

                Console.WriteLine("name : {0}", name);


                if (name == "")
                    break;
            }

            foreach (var x in names)
                Console.WriteLine(x);

            switch (names.Count)
            {
                case 7:
                    Console.WriteLine((names[1] + ", " + names[2] + " and 1 other person like your post" ));
                    break;
                case 6:
                case 5:
                    Console.WriteLine(names[1] + " and " + names[2] + " like your post");
                    break;
 
                case 4:
                case 3:
                case 2:
                    Console.WriteLine(names[1] + " liked your post");
                    break;
                case 1:
                    Console.WriteLine("No one has liked it yet");
                    break;
                default:
                    Console.WriteLine((names[1] + " and " + names[2] + " and " + (names.Count / 2) + " people like it!"));
                    break;
            }
                
        }
    }
}
