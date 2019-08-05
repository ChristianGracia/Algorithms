// using following arguments
// size(int) start=[int,int] instructions = [{heading: str, steps: int}, etc]

// size is a size by size grid, start is starting coordinates, instruction is an array ob objects with directions N S E W + number of steps
// return coordinates of treasure

var size = 9;
var start = [0, 0];
var instructions = [{heading: "N", steps: 10}, {heading: "E", steps: 22}, {heading: "S", steps: 13}, {heading: "E", steps: 41}, {heading: "N", steps: 33}]

function treasureHunt(size, start, instructions) {
    var currentPosition = start;

    // var array = new Array(size);


    // for (var i = 0; i < size; i++)
    // {
    //     array[i] = new Array(size);
    // }

    // console.log(array);

    for (var j = 0; j < instructions.length; j++) {
        console.log(instructions[j].heading);

        if (instructions[j].heading == "N") {
            currentPosition[1] += instructions[j].steps;
            if (currentPosition[1] > size) {
                currentPosition[1] = currentPosition[1] % size
            }
        }
        if (instructions[j].heading == "S") {
            currentPosition[1] -= instructions[j].steps;
            if (currentPosition[1] < 0) {
                currentPosition[1] += size
            }
        }
        if (instructions[j].heading == "E") {
            currentPosition[0] += instructions[j].steps;
            if (currentPosition[0] > size){
                currentPosition[0] = currentPosition[0] % size
            }
        }
        if (instructions[j].heading == "W") {
            currentPosition[0] -= instructions[j].steps;
            if (currentPosition[0] < 0) {
                currentPosition[0] = currentPosition += size;
            }
        }

    }
    console.log(currentPosition)

}

treasureHunt(size, start, instructions);
