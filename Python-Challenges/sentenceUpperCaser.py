def fixMessage(message):
    
    firstChar = slice(0,1)
    firstChar.toUpper()
    restMessage = slice(1)
    return message[firstChar].toUpper()
