def amendTheSentence(s):
    return re.sub(r"(?<=.)(?=[A-Z])", " ", s).lower()
