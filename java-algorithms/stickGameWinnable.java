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
//        win(5, moveChoices );



    }

    public static int getIndex(int value, int arr[])
    {

        int index = Arrays.binarySearch(arr, value);
        return (index < 0) ? -1 : index;
    }

    public static boolean win(int numberOfSticks, int[] moveChoices){

        int arrLength = moveChoices.length;

        int currentSticks = numberOfSticks;
        int[] tempMoveArr = moveChoices;

        boolean gameIsWinnable = false;

        //check for auto win on first move and remove values greater then number of sticks
        for(int i = 0; i < arrLength; i ++){
            if(tempMoveArr[i] == numberOfSticks){
                return true;
            }
        }
        System.out.println(tempMoveArr);


        for(int i = 0; i < arrLength; i++){
            if (tempMoveArr[i] <= currentSticks){
                currentSticks -= tempMoveArr[i];
                System.out.println("current sticks" + currentSticks);
                
            }
            else{
                tempMoveArr[i] = 0;
                System.out.println("move: " + tempMoveArr[i]  + " " + " current sticks: " + currentSticks);
            }
            if(currentSticks == 0){
                return true;
            }
            tempMoveArr = moveChoices;
        }




        return false;



    }
}
