package com.cg;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {


    public static void main(String[] args) {

        String[] related = new String[]{"10000", "00100", "00010", "00001"};
        String[] related1 = new String[]{"10000", "00100", "00010", "00001"};
        ArrayList<String[]> relatedStrings = new ArrayList<>();
        relatedStrings.add(related);
//        relatedStrings.add(related1);


        for (int i = 0; i < relatedStrings.size(); i++) {
            countGroups(relatedStrings.get(i));
        }
    }

    public static boolean checkAroundGrouping(String[] binaryDigitStrings, int arrayIndex, int letterIndex) {


        return true;

    }

    //accepts an array of strings of binary digits
    public static int countGroups(String[] binaryDigitStrings) {
        int groups = 0;
        for (int arrayIndex = 0; arrayIndex < binaryDigitStrings.length; arrayIndex++) {
            //System.out.println(binaryDigitStrings[arrayIndex]);
            for (int letterIndex = 0; letterIndex < binaryDigitStrings[arrayIndex].length() - 1; letterIndex++) {
                System.out.println(binaryDigitStrings[arrayIndex].charAt(letterIndex));
                char currentNumber = binaryDigitStrings[arrayIndex].charAt(letterIndex);
                if (currentNumber == "1" && checkAroundGrouping(binaryDigitStrings, arrayIndex, letterIndex)) {
                    groups++;
                }

            }


        }

        return groups;
    }
}
