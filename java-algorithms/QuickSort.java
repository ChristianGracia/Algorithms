package com.cg;

// in place algorithm
// O(nlogn) but can be O(n^2)
// unstable
// better then merge sort most times

public class Main {

    public static void main(String[] args) {

        int[] randomArray = {34, 5, 9, 12, 8, -3, 20, -34, 3, 40, 99, -7, 23};

        quickSort(randomArray, 0, randomArray.length);

        for (int i = 0; i < randomArray.length; i++) {
            System.out.println(randomArray[i]);
        }

    }

    public static void quickSort(int[] intArray, int startIndex, int endIndex) {

        if (endIndex - startIndex < 2) {
            return;
        }

        int pivotIndex = partition(intArray, startIndex, endIndex);
        quickSort(intArray, startIndex, pivotIndex);
        quickSort(intArray, pivotIndex + 1, endIndex);


    }

    public static int partition(int[] intArray, int startIndex, int endIndex) {

        int pivot = intArray[startIndex];

        int i = startIndex;
        int j = endIndex;

        while (i < j) {

            //empty loop, increment until number is found greater then or equal to pivot
            while (i < j && intArray[--j] >= pivot);

            if (i < j) {
                intArray[i] = intArray[j];
            }

            //empty loop, increment until number is found less then or equal to pivot
            while (i < j && intArray[++i] <= pivot);

            if (i < j) {
                intArray[j] = intArray[i];
            }
        }

        intArray[j] = pivot;
        return j;


    }
}
