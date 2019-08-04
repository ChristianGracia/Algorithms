function makeArrayConsecutive2(statues) {
    var statueCounter = 0;
    var max = Math.max(...statues);
    var min = Math.min(...statues);
    console.log(max);
    console.log(min);

    const set1 = new Set(statues);

    for (var i = min; i < max; i++) 
    {
        if (!set1.has(i)) 
        {
            statueCounter++;
        }
    }
    return statueCounter;
}

//this program looks at an array of numbers and tells you how many numbers would need to be added to make the array have all numbers in between its max and min