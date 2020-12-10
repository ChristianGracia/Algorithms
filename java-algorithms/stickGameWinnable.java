package com.cg;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {


        // n sticks
        // possible options 1, 4, 2, take that amount of sticks
        // whoever draws last stick wins
        int[] moveChoices =  { 1 , 4, 2 };

        System.out.println(win(3, moveChoices ));

        //with 5
        System.out.println(win(5, moveChoices ));



    }

    public static int getIndex(int value, int arr[])
    {

        int index = Arrays.binarySearch(arr, value);
        return (index < 0) ? -1 : index;
    }

    public static boolean checkIfNextMoveCanWin(int currentSticks, int[] arr){
        return getIndex(currentSticks, arr) > -1 ;
    }

    public static boolean checkIfNoAvailableMoves(int currentSticks, int[] arr){
        for(int i = 0; i < arr.length; i++){
            if(arr[i] <= currentSticks){
                return true;
            }
        }
        return false;
    }

    public static boolean win(int numberOfSticks, int[] moveChoices){

        int arrLength = moveChoices.length;

        int currentSticks = numberOfSticks;
        int[] tempMoveArr = moveChoices;


        for(int i = 0; i < arrLength; i++) {
            for (int j = 0; j < arrLength; j++) {
                if (i == j) {
                    j++;
                }

                if (checkIfNextMoveCanWin(currentSticks, tempMoveArr)) {
                    return true;
                }
                if (checkIfNoAvailableMoves(currentSticks, tempMoveArr)) {
                    return false;
                }

                if (tempMoveArr[i] <= currentSticks) {
                    currentSticks -= tempMoveArr[i];
                    System.out.println("current sticks " + currentSticks);
                } else {

                    System.out.println("move: " + tempMoveArr[i] + " " + " current sticks: " + currentSticks);
                    tempMoveArr[i] = 0;
                }

                if (currentSticks == 0) {
                    return true;
                }
                if (checkIfNextMoveCanWin(currentSticks, tempMoveArr)) {
                    return false;
                }
                if (checkIfNoAvailableMoves(currentSticks, tempMoveArr)) {
                    return true;
                }


            }
            tempMoveArr = moveChoices;
            currentSticks = numberOfSticks;
        }
        return false;
    }
}
