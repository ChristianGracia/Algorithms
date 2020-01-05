int knapsackLight(int value1, int weight1, int value2, int weight2, int maxW)
{

    int lowestValue = value1 > value2 ? value2 : value1;
    int highestValue = value1 > value2 ? value1 : value2;
    int lowestWeight = value1 > value2 ? weight2 : weight1;
    int highestWeight = value1 > value2 ? weight1 : weight2;

    int totalValue = 0;
    int currentWeight = 0;

    if (highestWeight <= maxW)
    {
        totalValue += highestValue;
        currentWeight += highestWeight;
    }
    if (currentWeight + lowestWeight <= maxW)
    {
        totalValue += lowestValue;
        currentWeight += lowestWeight;
    }
    return totalValue;



}
