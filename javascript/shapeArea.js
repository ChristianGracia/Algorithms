function shapeArea(n) {
    var area = 1;
    for (var i = n; i > 0; i--) 
    {
        area += ((i - 1) * 4);

    }
    return area;
}

//calculates the area of a shape that starts at an area of 1, and for every number n is above 1, a square is added to all corners of the original shape
