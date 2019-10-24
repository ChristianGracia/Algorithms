using System;
using System.Dynamic;

namespace PostVoter
{
    public class Program
    {
        public static void Main()
        {
            var post = new Post("How to Cook", "some recipes", DateTime.Now );
            post.UpVote();
            post.UpVote();
            Console.WriteLine(post.Votes);
            post.DownVote();
            Console.WriteLine(post.Votes);
            post.UpVote();
            Console.WriteLine(post.Votes);
            post.DownVote();
            Console.WriteLine(post.Votes);
        }
    }
}
