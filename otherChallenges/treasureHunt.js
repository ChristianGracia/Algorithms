// using following arguments
// size(int) start=[int,int] instructions = [{heading: str, steps: int}, etc]

// size is a size by size grid, start is starting coordinates, instruction is an array ob objects with directions N S E W + number of steps
// return coordinates of treasure

var size = 9;
var start = [0, 0];
var instructions = [{ heading: "SW", steps: 2 }]

function treasureHunt(size, start, instructions) {
    var currentPosition = start;

    for (var j = 0; j < instructions.length; j++) {
        console.log(instructions[j].heading);

        if (instructions[j].heading == "N") {
            currentPosition[1] += instructions[j].steps;
            if (currentPosition[1] > size) {
                currentPosition[1] = currentPosition[1] % size;
            }
        }
        if (instructions[j].heading == "S") {
            currentPosition[1] -= instructions[j].steps;
            if (currentPosition[1] < 0) {
                currentPosition[1] = size - (currentPosition[1] % size);
            }
        }
        if (instructions[j].heading == "E") {
            currentPosition[0] += instructions[j].steps;
            if (currentPosition[0] > size) {
                currentPosition[0] = currentPosition[0] % size;
            }
        }
        if (instructions[j].heading == "W") {
            currentPosition[0] -= instructions[j].steps;
            if (currentPosition[0] < 0) {
                currentPosition[0] = currentPosition += size;
            }
        }
        if (instructions[j].heading == "NW") {
            currentPosition[0] -= instructions[j].steps;
            currentPosition[1] += instructions[j].steps;
            if (currentPosition[1] > size) {
                currentPosition[1] = currentPosition[1] % size;
            }
            if (currentPosition[0] < 0) {
                currentPosition[0] = currentPosition[0] += size;
            }
        }
        if (instructions[j].heading == "NE") {
            currentPosition[0] += instructions[j].steps;
            currentPosition[1] += instructions[j].steps;
            if (currentPosition[1] > size) {
                currentPosition[1] = currentPosition[1] % size;
            }
            if (currentPosition[0] > size) {
                currentPosition[0] = currentPosition[0] % size;
            }
        }
        if (instructions[j].heading == "SE") {
            currentPosition[0] += instructions[j].steps;
            currentPosition[1] -= instructions[j].steps;
            if (currentPosition[1] < 0) {
                currentPosition[1] = size - (currentPosition[1] % size)
            }
            if (currentPosition[0] > size) {
                currentPosition[0] = currentPosition[0] % size;
            }
        }
        if (instructions[j].heading == "SW") {
            currentPosition[0] -= instructions[j].steps;
            currentPosition[1] -= instructions[j].steps;
            if (currentPosition[1] < 0) {
                currentPosition[1] = size + (currentPosition[1] % size)
            }
            if (currentPosition[0] < 0) {
                 currentPosition[0] = currentPosition[0] + size;
            }
        }

    }
    console.log(currentPosition);

}

treasureHunt(size, start, instructions);
