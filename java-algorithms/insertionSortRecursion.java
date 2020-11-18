package com.cg;

public class Main {

    public static void main(String[] args) {
        int[] randomArray = {34, 5, 9, 12, 8, -3, 20, -34, 3, 40, 99, -7, 23};

        insertionSortRecursion(randomArray, randomArray.length);

        for (int item : randomArray) {
            System.out.println(item);
        }

    }

    public static void insertionSortRecursion(int[] unsortedIntArray, int length) {

        if (length < 2) {
            return;
        }

        insertionSortRecursion(unsortedIntArray, length - 1);

        int newElement = unsortedIntArray[length - 1];

        int i;

        for (i = length - 1; i > 0 && unsortedIntArray[i - 1] > newElement; i--) {
            unsortedIntArray[i] = unsortedIntArray[i - 1];
        }

        unsortedIntArray[i] = newElement;

    }
}