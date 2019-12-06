class Solution {
    public int balancedStringSplit(String s) {

        int counter = 0;
        char first = s.charAt(0);
        int counter2 = 0;

        for (int i = 0; i < s.length() - 1; i++) {

            if (s.charAt(i) != first && counter2 == 1) {
                counter++;
                counter2++;
            }

            else {
                counter2--;
                first = s.charAt(i);
            }
        }
        return counter;

    }
}