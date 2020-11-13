package com.cg;

//makes assumptions about data

//doesnt use comparisons, counts the number of occurrences of each value

//only works with non negative discrete values

//values must be within specific range

// O(n) - because of these assumptions

// using array indices to keep track of values in array to be sorted

// not in place algorithm

// can be stable but requires extra steps


public class Main {

    public static void main(String[] args) {

        int[] intArray = { 3, 2, 5, 2, 4, 3, 6, 4, 8, 9, 6, 22, 44, 77};

        countingSort(intArray, 1, 77);

        for (int i = 0; i < intArray.length; i++){
            System.out.println(intArray[i]);
        }

    }

    public static void countingSort(int[] intArray, int min, int max){

        int[] valueCountArray = new int[(max-min) + 1];

        for(int i = 0; i < intArray.length; i++){
            valueCountArray[intArray[i]-min]++;
        }

        int j = 0;

        for(int i = min; i <= max; i++){
            while(valueCountArray[i - min] > 0) {
                intArray[j++] = i;
                valueCountArray[i - min]--;
            }
        }

    }
}

