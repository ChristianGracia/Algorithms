package com.cg;

// can be O(n) because of assumptions about data , it often is O(nlogn)

// counting sort is often used as the sort algorithm for radix sort but must be stable

// data must have same width and radix - ex. all 4 digits, base 10

// starts at right most position, works on ints and strings

public class Main {

    public static void main(String[] args) {

        int[] intArray = {3345, 5678, 3123, 9854, 1234, 5432, 2123, 9800};

        radixSort(intArray, 10, 4);

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }

    }

    public static void radixSort(int[] intArray, int radix, int width) {

        for (int i = 0; i < width; i++) {
            radixSingleSort(intArray, i, radix);
        }

    }

    public static void radixSingleSort(int[] intArray, int position, int radix) {

        int numberOfItems = intArray.length;

        int[] digitCountArray = new int[radix];

        for (int value : intArray) {
            digitCountArray[getDigit(position, value, radix)]++;
        }

        // adjust count array for number of values that have that digit or less then that digit
        for (int j = 1; j < radix; j++) {
            digitCountArray[j] += digitCountArray[j - 1];
        }

        int[] temp = new int[numberOfItems];

        for (int tempIndex = numberOfItems - 1; tempIndex >= 0; tempIndex--) {
            temp[--digitCountArray[getDigit(position, intArray[tempIndex], radix)]] = intArray[tempIndex];

        }

        for (int tempIndex = 0; tempIndex < numberOfItems; tempIndex++) {
            intArray[tempIndex] = temp[tempIndex];
        }


    }

    public static int getDigit(int position, int value, int radix) {
        return value / (int) Math.pow(10, position) % radix;
    }
}
