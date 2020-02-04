string amendTheSentence(string s)
{
    string pattern = @"[A-Z\s]";
    Regex rgx = new Regex(pattern);
    foreach (Match match in rgx.Matches(s))
    {

        s = Regex.Replace(s, match.Value, " " + match.Value.ToLower());

    }
    return s.Trim();
}