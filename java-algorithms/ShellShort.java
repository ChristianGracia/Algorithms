package com.cg;

public class Main {

    public static void main(String[] args) {
        int[] randomArray = {34, 5, 9, 12, 8, -3, 20, -34, 3, 40, 99, -7, 23};

        int[] sortedArray = shellSort(randomArray);

        for (int item : randomArray) {
            System.out.println(item);
        }
    }

    public static int[] shellSort(int[] unsortedIntArray) { 

        for (int gap = unsortedIntArray.length / 2; gap >  0; gap /= 2) {

            for ( int i = gap; i < unsortedIntArray.length; i++){

                int intBeingSorted = unsortedIntArray[i];
                int j = i;

                while ( j >= gap && unsortedIntArray[j - gap] > intBeingSorted ) {
                    unsortedIntArray[j] = unsortedIntArray[j - gap];
                    j -= gap;
                }

                unsortedIntArray[j] = intBeingSorted;
            }

        }
        return unsortedIntArray;
    }

}
