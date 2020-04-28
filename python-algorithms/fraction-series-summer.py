sum = 0
for x in range(0, 48, 1):
    numerator = (1+(2 * x))
    denominator = (3 + (2 * x))
    print(str(numerator) + " / " + str(denominator))
    sum += (numerator / denominator)
print(sum)
