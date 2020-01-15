def leastFactorial(n):
    k = 0;
    while True:
        k += 1
        number = k
        factorialNum = 1
        for i in reversed(range(1,k+1)):
            factorialNum *= number
            number -= 1
        if factorialNum >= n:
            return factorialNum
            
          