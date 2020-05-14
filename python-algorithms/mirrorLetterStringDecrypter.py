def decrypt(sentance):
    returnString = ""

    for letter in sentance:

        letterNumber = ord(letter) - 97
        distance = 25 - letterNumber
        if letter.isLower():

            returnString += chr(distance + 97)
        else:
            returnString += letter

    return returnString
