package com.cg;

import java.util.*;

public class Main {

    public static void main(String[] args) {

        int[] moveChoices = {1, 4, 2};

        System.out.println(win(3, moveChoices));

        //with 5
//        System.out.println(win(5, moveChoices));

    }

    public static int getIndex(int value, int arr[]) {

        int index = Arrays.binarySearch(arr, value);
        return (index < 0) ? -1 : index;
    }

    public static boolean checkIfNextMoveCanWin(int currentSticks, int[] arr) {
        return getIndex(currentSticks, arr) > -1;
    }

    public static boolean checkIfAvailableMoves(int currentSticks, int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] <= currentSticks) {
                return true;
            }
        }
        return false;
    }

    public static int[] replaceLargeValues(int limit, int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > limit) {
                arr[i] = 0;
            }
        }
        return arr;
    }

    public static Stack<int[]> getAllOrdersOfItems(int[] arr) {
        int[] a = arr.clone();
        ArrayList<String> combinationsAsString = new ArrayList<String>();
        Stack<int[]> possibleOrders
                = new Stack<>();
        int temp;
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
                String obj = Arrays.toString(a);
                if (!combinationsAsString.contains(obj)) {
                    combinationsAsString.add(obj);

                    possibleOrders.add(a);
                }
                a = arr.clone();
            }
        }
        return possibleOrders;
    }


    public static boolean win(int numberOfSticks, int[] moveChoices) {

        int currentSticks = numberOfSticks;
        int[] tempMoveArr = moveChoices;
        int turnCounter = 0;

        Stack allPossibleOrders = getAllOrdersOfItems(moveChoices);

        while (allPossibleOrders.size() > 0) {

            int[] currentArr = (int[]) allPossibleOrders.peek();

            for(int j = 0; j < currentArr.length; j++){
                System.out.print(currentArr[j] + ", ");
            }
            System.out.println();

            for (int i = 0; i < moveChoices.length; i++) {

                System.out.println("Current sticks: " + currentSticks + " - " + currentArr[i]);
                if (currentArr[i] <= currentSticks) {
                    currentSticks -= currentArr[i];

                    if (currentSticks == 0 && turnCounter % 2 == 0) {
                        return true;
                    }
                }
                turnCounter++;

            }
            //reset to try next possible order
            currentSticks = numberOfSticks;
            allPossibleOrders.pop();

        }
        return false;
    }
}
