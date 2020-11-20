package com.cg;

public class Main {

    public static void main(String[] args) {

        String[] stringArray = {"aajfl","xcdfg", "aaaad", "abcjfl", "abjfl", "abdjfl"};

           radixSort(stringArray, 26, 5);

        for (int i = 0; i < stringArray.length; i++) {
            System.out.println(stringArray[i]);
        }

    }

    public static void radixSort(String[] stringArray, int radix, int width) {

        for (int i = width - 1; i >= 0; i--) {
            radixSingleSort(stringArray, i, radix);
        }

    }

    public static void radixSingleSort(String[] stringArray, int position, int radix) {

           int numberOfLetters = stringArray.length;
           int[] digitCountArray = new int[radix];

        for (String value : stringArray) {
           digitCountArray[value.charAt(position) - 'a']++;
        }

        for (int j = 1; j < radix; j++) {
            digitCountArray[j] += digitCountArray[j - 1];
        }

        String[] temp = new String[numberOfLetters];

        for (int tempIndex = numberOfLetters - 1; tempIndex >= 0; tempIndex--) {
            temp[--digitCountArray[stringArray[tempIndex].charAt(position) - 'a']] = stringArray[tempIndex];

        }

        for (int tempIndex = 0; tempIndex < numberOfLetters; tempIndex++) {
            stringArray[tempIndex] = temp[tempIndex];
        }

    }

}
