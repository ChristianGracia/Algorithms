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

// You have been given a string s, which is supposed to be a sentence.However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word.Return the sentence after making the following amendments:


// Put a single space between the words.
// Convert the uppercase letters to lowercase.