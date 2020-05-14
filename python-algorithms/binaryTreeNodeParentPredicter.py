def solution(h, q):
    returnArr = []

    for treeElement in q:

        if treeElement > h * 2:
            returnArr.insert(-1)
        elif treeElement % 2 == 0:
            returnArr.insert(treeElement + 1)
        else:
            returnArr.insert(treeElement + 2)
    print(returnArr)
    return returnArr
