def amendTheSentence(s):
    return re.sub('[A-Z\s]', ' ', s).strip()
