function firstNotRepeatingCharacter(s) {
    for (var i = 0; i < s.length; i++) {

        var stringCheck = s.substr(i);
        if (s[i] != s[i + 1] && stringCheck.lastIndexOf(s[i]) == 0) {
            return s[i];
        }

    }
    return '_';
}
