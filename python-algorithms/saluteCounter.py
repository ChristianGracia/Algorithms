
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

s = "--->-><-><-->-"


def solution(s):
    index = len(s) - 1
    salutes = 0

    for x in range(index, 0, -1):
        if s[x] == '<':
            tempString = s[0:x]
            salutes += tempString.count('>')
        x -= 1
    return salutes * 2
