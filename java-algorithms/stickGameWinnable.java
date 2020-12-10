package com.cg;

import java.util.*;

public class Main {

    public static void main(String[] args) {

        int[] moveChoices = {1, 4, 2};

        //System.out.println(win(3, moveChoices));
        System.out.println(win(5, moveChoices));

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

        System.out.println(allPossibleOrders.size());

        while (allPossibleOrders.size() > 0) {

            int[] currentArr = (int[]) allPossibleOrders.peek();

            //printing
            for(int j = 0; j < currentArr.length; j++){
                System.out.print(currentArr[j] + ", ");
            }
            System.out.println();

            for (int i = 0; i < moveChoices.length; i++) {

                System.out.println("Current sticks: " + currentSticks + " " + "Current value: " + currentArr[i]);

                //if current value is less then sticks then subtract, if 0 the win
                //if oponnent has no moves win
                if(turnCounter % 2 != 0 && i == moveChoices.length){
                    System.out.println("here");
                    return true;
                }


                if (currentArr[i] <= currentSticks) {
                    currentSticks -= currentArr[i];
                    System.out.println("total sticks: " + currentSticks);
                    if (currentSticks == 0 && turnCounter % 2 == 0) {
                        return true;
                    }
                    turnCounter++;
//                    if(i < currentArr.length && currentArr[i+1] > currentSticks){
//                        return true;
//                    }
                }
                else{
                    break;
                }


            }
            //reset to try next possible order
            System.out.println("-------RESET-------");
            currentSticks = numberOfSticks;
            turnCounter = 0;
            allPossibleOrders.pop();

        }
        return false;
    }
}
