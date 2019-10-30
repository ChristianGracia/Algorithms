using System;
using System.Linq;

class Person
{
    protected string firstName;
    protected string lastName;
    protected int id;

    public Person() { }
    public Person(string firstName, string lastName, int identification)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = identification;
    }
    public void printPerson()
    {
        Console.WriteLine("Name: " + lastName + ", " + firstName + "\nID: " + id);
    }
}

class Student : Person
{
    private int[] testScores;
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Id { get; set; }
    public int[] scores { get; set; }

    class Student : Person
    {
        private int[] testScores;
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Id { get; set; }
        public int[] Scores { get; set; }


        public Student(string firstName, string lastName, int id, int[] scores)
        {
            this.FirstName = firstName;
            this.LastName = lastName;

            this.Id = id;

            this.Scores = scores;


        }
        public int Calculate()
        {

            int counter = 0;
            int sum = 0;

            foreach (var item in Scores)
            {
                sum += item;
                counter++;
            }

            int average = sum / counter;

            return average;

        }
    }

    class Solution
    {
        static void Main()
        {
            string[] inputs = Console.ReadLine().Split();
            string firstName = inputs[0];
            string lastName = inputs[1];
            int id = Convert.ToInt32(inputs[2]);
            int numScores = Convert.ToInt32(Console.ReadLine());
            inputs = Console.ReadLine().Split();
            int[] scores = new int[numScores];
            for (int i = 0; i < numScores; i++)
            {
                scores[i] = Convert.ToInt32(inputs[i]);
            }

            Student s = new Student(firstName, lastName, id, scores);
            s.printPerson();
            Console.WriteLine("Grade: " + s.Calculate() + "\n");
        }
    }