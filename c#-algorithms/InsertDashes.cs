string insertDashes(string inputString)
{
    string returnString = "";
    int length = inputString.Length;

    for (int i = 0; i < length; i++)
    {
        char letter = inputString[i];
        returnString += letter;
        if (letter != ' ' && i != length - 1)
        {
            returnString += "-";
        }
    }
    return returnString.Replace("- ", " ");
}