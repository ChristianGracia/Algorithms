number = 1
numList = []
numPositives = 0
numNegatives = 0
average = 0

while number != 0:
    number = int(input("Enter an integer, the input ends if it is 0: "))
    if(number != 0):
        numList.append(number)
        if (number * -1 > 0):
            numNegatives += 1
        else:
            numPositives += 1

average = float(sum(numList, 0) / len(numList))

print("The number of positives is " + str(numPositives))
print("The number of negatives is " + str(numNegatives))
print("The total is " + str(len(numList)))
print("The average is " + str(average))
