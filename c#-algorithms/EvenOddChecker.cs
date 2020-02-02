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
