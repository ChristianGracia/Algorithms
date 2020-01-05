class Solution
{

    static void Main(string[] args)
    {
        int number = Convert.ToInt32(Console.ReadLine());
        int[] binaryArr = new int[10];
        int i;
        for (i = 0; number > 0; i++)
        {
            binaryArr[i] = number % 2;
            number = number / 2;
        }
        Console.Write("Binary: ");
        for (i = i - 1; i >= 0; i--)
        {
            Console.Write(binaryArr[i]);
        }
    }
}
