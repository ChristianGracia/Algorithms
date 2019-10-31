#one liner
def fixMessage(message):
    return message[0].upper() + message[slice(1, len(message))].lower()

#longer version
def fixMessage(message):
    newMessage = message[0].upper()
    counter = 0
    for x in message:
        counter += 1
        if counter > 1:
            newMessage += x.lower()
           
    return newMessage