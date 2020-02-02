string characterParity(char symbol)
{

    if (symbol < '0' || symbol > '9')
        return "not a digit";
    if ((symbol - '0') % 2 == 0)
        return "even";
    return "odd";
}


string characterParity(char symbol)
{

    if (!char.IsLetter(symbol))
    {
        if (Convert.ToInt32(symbol) % 2 == 0)
        {
            return "even";
        }
        else
        {
            return "odd";
        }
    }
    return "not a digit";
}
