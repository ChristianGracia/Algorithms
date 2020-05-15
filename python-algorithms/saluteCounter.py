
# Write a program that counts how many salutes are exchanged during a typical walk along a hallway.
#  The hall is represented by a string. For example:
# "--->-><-><-->-"

# Each hallway string will contain three different types of characters: '>', an employee walking to the right
# '<', an employee walking to the left
# and '-', an empty space. Every employee walks at the same speed either to right or to the left,
# according to their direction. Whenever two employees cross, each of them salutes the other.
# They then continue walking until they reach the end, finally leaving the hallway. In the above example,
# they salute 10 times.

# Write a function solution(s) which takes a string representing employees walking along a
# hallway and returns the number of times the employees will salute. s will contain at least 1
# and at most 100 characters, each one of - , > , or < .


s = "<<>><"


def solution(s):
    length = len(s) - 1
    headedRight = s.count('>')

    headedLeft = s.count('<')
    salutes = 0

    print(s)
    print(headedLeft)
    print(headedRight)

    counter = length
    for x in range(1, counter):
        if s[x] == '<':
            tempString = s[0::x]
            salutes = tempString.count('>')
        x -= 1

    print(salutes)
    return salutes


solution(s)
