string insertDashes(string inputString)
{
    string[] wordArr = inputString.Split(" ");
    string returnString = "";
    foreach (string word in wordArr)
    {
        foreach (char letter in word)
        {
            if (letter != ' ')
            {
                returnString += letter;
                returnString += "-";
            }
            else
            {
                returnString + " ";

            }

        }



    }


    return returnString;

}