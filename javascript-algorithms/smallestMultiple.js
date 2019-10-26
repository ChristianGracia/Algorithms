
function smallestCommons(arr) {
    var counter = 0;

    while (true) {
        counter++;
        if (counter % arr[0] == 0 && counter % arr[1] == 0) {
            break;
        }

    }
    console.log(arr)
    console.log(counter)
    return counter;
}


smallestCommons([1, 5]);
