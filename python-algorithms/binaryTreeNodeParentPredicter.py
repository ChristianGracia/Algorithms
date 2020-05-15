#    7
#  3   6
# 1 2 4 5

# post order traversal perfect binary tree parent node predicter

import math


def solution(h, q):
    returnArr = []
    for treeElement in q:
        currentHeight = h
        number = int(math.pow(2, h)-1)
        if(treeElement == number):
            returnArr.append(-1)
        else:
            numberBefore = int(math.pow(2, currentHeight)-2)
            numberLeft = int(number-int(numberBefore/2)-1)
            numberRight = int(number-1)
            flag = 0
            while(treeElement != numberRight and treeElement != numberLeft and flag < 10):
                flag += 1
                if(treeElement > numberLeft):
                    number = numberRight
                else:
                    number = numberLeft
                currentHeight = currentHeight-1
                numberBefore = int(math.pow(2, currentHeight)-2)
                numberLeft = number-(numberBefore/2)-1
                numberRight = number-1
            returnArr.append(int(number))
    return returnArr


solution(h, q)
