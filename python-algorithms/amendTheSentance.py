def amendTheSentence(s):
    return re.sub('[A-Z\s]', ' \1', s).strip().lower()
