
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

        int count = 0;
        int mostConsecutiveOnes = 0;

        for (i = i - 1; i >= 0; i--)
        {
            Console.Write(binaryArr[i]);
            if (binaryArr[i] == 1)
            {
                count++;
                if (count > mostConsecutiveOnes)
                {
                    mostConsecutiveOnes = count;
                }
            }
            else
            {
                count = 0;
            }

        }
    }
}