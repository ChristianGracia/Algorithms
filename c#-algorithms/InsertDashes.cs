string insertDashes(string inputString)
{
    string returnString = "";
    foreach (char item in inputString)
    {
        if (item != ' ')
        {
            returnString += item;
            returnString += "-";
        }
        else
        {
            returnString += item;
        }

    }
    return returnString;

}
