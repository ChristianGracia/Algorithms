package com.cg;

public class Main {

    public static void main(String[] args) {
        //5
        char[][] matrix3 =
                {
                        {'a', 'b', 'c'},
                        {'l', 'm', 'n'},
                        {'j', 'p', 'o'},
                };

        //7
        char[][] matrix =
                {
                        {'a', 'b', 'c', 'd'},
                        {'l', 'm', 'n', 'e'},
                        {'k', 'p', 'o', 'f'},
                        {'j', 'i', 'h', 'g'}
                };

        //9
        char[][] matrix2 =
                {
                        {'a', 'b', 'c', 'd', 'e'},
                        {'p', 'q', 'r', 's', 'f'},
                        {'o', 'x', 'y', 't', 'g'},
                        {'n', 'w', 'v', 'u', 'h'},
                        {'m', 'l', 'k', 'j', 'i'}
                };

        //11
        char[][] matrix4 =
                {
                        {'a', 'b', 'c', 'd', 'e', 'e'},
                        {'l', 'm', 'n', 'e', 'e', 'e'},
                        {'j', 'p', 'o', 'f', 'e', 'e'},
                        {'k', 'i', 'h', 'g', 'e', 'e'},
                        {'k', 'i', 'h', 'g', 'e', 'e'},
                        {'a', 'b', 'c', 'd', 'e', 'e'},
                };

        print_spiral(matrix, 4, 4);
        print_spiral(matrix2, 5, 5);

    }

    public static void print_spiral(char[][] matrix, int m, int n) {

        int matrixLength = m * n;
        char[] orderedChars = new char[matrixLength];

        int orderedCharsIncrementor = 0;

        int currentX = 0;
        int currentY = 0;

        int coveredTop = 0;
        int coveredBottom = m - 1;

        int coveredLeft = 0;
        int coveredRight = n - 1;

        int maxTraversals = m + n;
        int traversals = 0;

        while (traversals < maxTraversals) {


            //go right
            for (; currentX < coveredRight; currentX++) {
                orderedChars[orderedCharsIncrementor++] = matrix[currentY][currentX];
            }
            traversals++;

            //go down
            for (; currentY < coveredBottom; currentY++) {
                orderedChars[orderedCharsIncrementor++] = matrix[currentY][currentX];
            }
            coveredLeft++;
            traversals++;
            coveredTop++;


            //go left
            for (; currentX >= coveredLeft;) {
                orderedChars[orderedCharsIncrementor++] = matrix[currentY][currentX--];
            }
            traversals++;
            coveredRight--;

            // go up
            for (; currentY >= coveredTop;) {
                orderedChars[orderedCharsIncrementor++] = matrix[currentY--][currentX];
            }
            traversals++;
            coveredBottom--;
            currentY = coveredTop;
            currentX = coveredLeft;
        }
        System.out.println(orderedChars);
    }
}

// notes


// row + col - 1 if perfect 3x3 4x4 5x5 6x6

//00 01 02 03 13 23 33 32 31 30 20 10 11 12 22 21

// 0 1 2    3
//11 12 13  4
// 10 15 14 5
// 9   8    7  6
