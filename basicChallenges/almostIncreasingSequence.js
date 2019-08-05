function almostIncreasingSequence(sequence) {
    var length = sequence.length;
    var counter = 0;
    const set1 = new Set(sequence);

    var repeatCheck = length - set1.size;

    if (repeatCheck > 1) {
        counter += 2;
    }


    for (var i = 0; i < length - 1; i++) {
        if (sequence[i] > sequence[i + 1]) {
            counter++;
        }

    }

    if (counter < 2) {
        return true;
    }
    else return false;

}

//program checks if the inputted array can be made to be decreasing to increasing values with the removal of only one element.
