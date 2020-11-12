package com.cg;

public class Main {

    public static void main(String[] args) {
        int[] randomArray = {34, 5, 9, 12, 8, -3, 20, -34, 3, 40, 99, -7, 23};

        int[] sortedArray = insertionSort(randomArray);

        for (int item : randomArray) {
            System.out.println(item);
        }
    }

    public static int[] insertionSort(int[] unsortedIntArray) {


        for (int firstUnsortedIndex = 1; firstUnsortedIndex < unsortedIntArray.length; firstUnsortedIndex++) {

            int itemBeingSorted = unsortedIntArray[firstUnsortedIndex];

            int i;

            for (i = firstUnsortedIndex; i > 0 && unsortedIntArray[i - 1] > itemBeingSorted; i--) {

                unsortedIntArray[i] = unsortedIntArray[i - 1];

            }

            unsortedIntArray[i] = itemBeingSorted;
        }
        return unsortedIntArray;
    }


}
