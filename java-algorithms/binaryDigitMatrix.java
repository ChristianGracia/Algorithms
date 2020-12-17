package com.cg;

import java.util.ArrayList;

public class Main {


    public static void main(String[] args) {

        String[] related = new String[]{"1100", "1110", "0110", "0001"};
        String[] related1 = new String[]{"10000", "01000", "00100", "00001"};
        ArrayList<String[]> relatedStrings = new ArrayList<>();
        relatedStrings.add(related);
        relatedStrings.add(related1);

        for (String[] relatedString : relatedStrings) {
            System.out.println(countGroups(relatedString));
        }
    }

    public static boolean checkForGroups(String[] binaryDigitStrings, int arrayIndex, int letterIndex) {

        int valueCounterX = 0;
        int valueCounterY = 0;

        // check vertically
        for (int i = 0; i < binaryDigitStrings.length; i++) {

            if (Character.getNumericValue(binaryDigitStrings[i].charAt(letterIndex)) == 1) {
                valueCounterX++;
            }


        }

        // check horizontally
        for (int i = 0; i < binaryDigitStrings[arrayIndex].length(); i++) {

            if (Character.getNumericValue(binaryDigitStrings[arrayIndex].charAt(i)) == 1) {
                valueCounterY++;
            }


        }

        return valueCounterX > 1 || valueCounterY > 1;
    }

    public static int countGroups(String[] binaryDigitStrings) {
        int groups = 1;
        for (int arrayIndex = 0; arrayIndex < binaryDigitStrings.length; arrayIndex++) {

            for (int letterIndex = 0; letterIndex < binaryDigitStrings[arrayIndex].length(); letterIndex++) {

                int currentNumber = Character.getNumericValue(binaryDigitStrings[arrayIndex].charAt(letterIndex));

                if (currentNumber == 1 && !checkForGroups(binaryDigitStrings, arrayIndex, letterIndex)) {
                    groups++;
                }

            }


        }

        return groups;
    }
}
