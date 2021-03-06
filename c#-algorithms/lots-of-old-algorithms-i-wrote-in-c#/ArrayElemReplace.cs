int[] arrayReplace(int[] inputArray, int elemToReplace, int substitutionElem)
{
    for (int index = 0; index < inputArray.Length; index++)
    {
        if (inputArray[index] == elemToReplace)
        {
            inputArray[index] = substitutionElem;
        }
    }
    return inputArray;

}

int[] arrayReplace(int[] inputArray, int elemToReplace, int substitutionElem)
{
    return inputArray.Select(item => item == elemToReplace ? substitutionElem : item).ToArray();
}
