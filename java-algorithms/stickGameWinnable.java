package com.cg;

import java.util.*;

public class Main {

    public static void main(String[] args) {

        int[] moveChoices = {1, 4, 2};

        System.out.println(win(3, moveChoices));
        System.out.println("---------------------");
        System.out.println(win(5, moveChoices));

    }

    public static Stack<int[]> getAllOrdersOfItems(int[] arr, int k, Stack<int[]> stackOfOrders) {


        if (k == arr.length) {
            int[] temp = new int[arr.length];
            System.arraycopy(arr, 0, temp, 0, 3);
            stackOfOrders.add(temp);
        } else {
            for (int i = k; i < arr.length; i++) {
                int temp = arr[k];
                arr[k] = arr[i];
                arr[i] = temp;

                getAllOrdersOfItems(arr, k + 1, stackOfOrders);

                temp = arr[k];
                arr[k] = arr[i];
                arr[i] = temp;
            }
        }
        return stackOfOrders;
    }

    public static boolean checkIfMovesAvailable(int numberOfSticks, int[] moveChoices, int index) {

        for (int i = index; i < moveChoices.length; i++) {
            if (moveChoices[i] <= numberOfSticks) {
                return true;
            }
        }
        return false;
    }


    public static boolean win(int numberOfSticks, int[] moveChoices) {

        int currentSticks = numberOfSticks;


        Stack<int[]> allPossibleOrders = getAllOrdersOfItems(moveChoices, 0, new Stack<int[]>());

        while (allPossibleOrders.size() > 0) {
            int[] arr = allPossibleOrders.pop();

            for (int i = 0; i < arr.length; i++) {


                if (currentSticks - arr[i] >= 0) {

                    currentSticks -= arr[i];

                    if (currentSticks == 0 || !checkIfMovesAvailable(currentSticks, arr, i + 1)) {
                        return true;
                    } else {
                        if ((i + 1 <= arr.length - 1 && currentSticks - arr[i + 1] == 0)) {
                            break;
                        }
                    }


                } else {
                    break;
                }

            }
            currentSticks = numberOfSticks;
        }
        return false;
    }
}
