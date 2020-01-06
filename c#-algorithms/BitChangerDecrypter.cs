int killKthBit(int n, int k)
{
    char[] result = Convert.ToString(n, 2).ToCharArray();
    int length = result.Length;
    Console.WriteLine(Convert.ToString(n, 2));

    string newString = "";

    for (int i = 0; i < length; i++)
    {
        if (i == length - k)
        {
            newString += "0";

        }
        else
        {
            newString += result[i].ToString();
        }


    }
    Console.WriteLine(newString);



    int newNum = Convert.ToInt32(newString, 2);

    return newNum;



}
