def maxDigit(n):
    highestDigit = 0
    number = n
    
    while number > 9:
          if number % 10 > highestDigit:
               highestDigit = number % 10
          number = number / 10
    return math.floor(highestDigit)

