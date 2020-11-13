// using following arguments
// size(int) start=[int,int] instructions = [{heading: str, steps: int}, etc]

// size is a size by size grid, start is starting coordinates, instruction is an array ob objects with directions N S E W + number of steps
// return coordinates of treasure

var size = 9;
var start = [0, 0];

var instructions = [{
    heading: "SE",
    steps: 10
}, {
    heading: "N",
    steps: 5
}, {
    heading: "SW",
    steps: 13
}, {
    heading: "E",
    steps: 5
}, {
    heading: "W",
    steps: 10
}, {
    heading: "NE",
    steps: 5
}, {
    heading: "S",
    steps: 15
}, {
    heading: "W",
    steps: 7
}, {
    heading: "NW",
    steps: 3
}]

function treasureHunt(size, start, instructions) {
    var currentPosition = start;

    for (var j = 0; j < instructions.length; j++) {
        console.log(instructions[j].heading);


        if (currentPosition == trap) {
            console.log("You are dead");
            break;
        }




        if (instructions[j].heading == "N") {
            currentPosition[1] += instructions[j].steps;
            if (currentPosition[1] > size) {
                currentPosition[1] = currentPosition[1] % size;
            }
        }
        if (instructions[j].heading == "S") {
            currentPosition[1] -= instructions[j].steps;
            if (currentPosition[1] < 0) {
                currentPosition[1] = (currentPosition[1] % size) + size;
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
                currentPosition[0] = (currentPosition[0] % size) + size;
            }
        }
        if (instructions[j].heading == "NW") {
            currentPosition[0] -= instructions[j].steps;
            currentPosition[1] += instructions[j].steps;
            if (currentPosition[1] > size) {
                currentPosition[1] = currentPosition[1] % size;
            }
            if (currentPosition[0] < 0) {
                currentPosition[0] = (currentPosition[0] % size) + size;
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
                currentPosition[1] = (currentPosition[1] % size) + size;
            }
            if (currentPosition[0] > size) {
                currentPosition[0] = currentPosition[0] % size;
            }
        }
        if (instructions[j].heading == "SW") {
            currentPosition[0] -= instructions[j].steps;
            currentPosition[1] -= instructions[j].steps;
            if (currentPosition[1] < 0) {
                currentPosition[1] = (currentPosition[1] % size) + size;
            }
            if (currentPosition[0] < 0) {
                currentPosition[0] = (currentPosition[0] % size) + size;
            }
        }

        var trap = [8, 8];
        console.log(currentPosition);
        console.log(trap);
        if (currentPosition == trap) {
            console.log("hi");


        }

    }
    console.log(currentPosition);

}

treasureHunt(size, start, instructions);
