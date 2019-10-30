int seatsInTheater(int nCols, int nRows, int col, int row) { 
    return (nCols - col + 1) * (nRows - row);
}

//alt method more readable

int seatsInTheater(int nCols, int nRows, int col, int row) { 
    
    int colDif = nCols - col + 1;
    int rowDif = nRows - row;
    int seatsBlocked = rowDif * colDif;
    return seatsBlocked;
}
