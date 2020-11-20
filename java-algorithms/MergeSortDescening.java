package com.cg;

public class Main {

    public static void main(String[] args) {
        int[] unsortedIntArray = {20, -15, 25, -45, 30, 56};

        mergeSort(unsortedIntArray, 0, unsortedIntArray.length);

        for (int i = 0; i < unsortedIntArray.length; i++) {
            System.out.println(unsortedIntArray[i]);
        }
    }

    public static void mergeSort(int[] intArray, int startIndex, int endIndex) {
        if (endIndex - startIndex < 2) {
            return;
        }

        int middleIndex = (startIndex + endIndex) / 2;
        mergeSort(intArray, startIndex, middleIndex);
        mergeSort(intArray, middleIndex, endIndex);
        merge(intArray, startIndex, middleIndex, endIndex);

    }

    public static void merge(int[] intArray, int startIndex, int middleIndex, int endIndex) {
        if (intArray[middleIndex - 1] >= intArray[middleIndex]) {
            return;
        }

        int i = startIndex;
        int j = middleIndex;
        int tempIndex = 0;

        int[] temp = new int[endIndex - startIndex];

        while (i < middleIndex && j < endIndex) {
            temp[tempIndex++] = intArray[i] >= intArray[j] ? intArray[i++] : intArray[j++];
        }

        System.arraycopy(intArray, i, intArray, startIndex + tempIndex, middleIndex - i);
        System.arraycopy(temp, 0, intArray, startIndex, tempIndex);
    }
}
