// using following arguments
// size(int) start=[int,int] instructions = [{heading: str, steps: int}, etc]

// size is a size by size grid, start is starting coordinates, instruction is an array ob objects with directions N S E W + number of steps
// return coordinates of treasure

var size = 9;
var start = [0,0];
var instructions = [{heading: "N", steps: 3}, {heading: "E", steps: 2}, {heading: "S", steps: 1}, {heading: "E", steps: 4}, {heading: "N", steps: 3}];

function treasureHunt(size, start, instructions){
    
    var array = new Array(size);
    var currentPosition = start
    
    for (var i = 0; i < size; i++)
    {
        array[i] = new Array(size);
    }
    
    console.log(array);
    
    for (var j = 0; j < instructions.length; j++)
    {
        console.log(instructions[j].heading);
        
        if (instructions[j].heading == "N"){
            currentPosition[1] += instructions[j].steps;
        }
         if (instructions[j].heading == "S"){
            currentPosition[1] -= instructions[j].steps;
        }
          if (instructions[j].heading == "E"){
            currentPosition[0] += instructions[j].steps;
        }
          if (instructions[j].heading == "W"){
            currentPosition[0] -= instructions[j].steps;
        }
        
    }
    console.log(currentPosition)
    
}

treasureHunt(size, start, instructions);