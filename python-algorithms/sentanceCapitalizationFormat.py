def fixMessage(message):
    newMessage = message[0].upper()
    counter = 0
    for x in message:
        counter += 1
        if counter > 1:
            newMessage += x.lower()
           
    return newMessage