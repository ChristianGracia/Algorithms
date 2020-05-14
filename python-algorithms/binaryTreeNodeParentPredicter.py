
h = 3
# q = [1, 4, 7]
returnArr = []

q = [7, 3, 5, 1]

for treeElement in q:

    if treeElement > h * 2:
        returnArr.append(-1)
    elif treeElement % 2 == 0:
        returnArr.append(treeElement + 1)
    else:
        returnArr.append(treeElement + 2)
print(returnArr)
