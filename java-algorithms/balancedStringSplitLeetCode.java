class Solution {
    public int balancedStringSplit(String s) {

        int length = s.length();
        int[] numArr = new int[length - 1];

        for (int i = 0; i < length - 1; i++) {

            if (Character.toLowerCase(s.charAt(i)) == 'r') {
                numArr[i] = -1;
            } else {
                numArr[i] = 1;
            }
        }

        int sum = 0;
        int balancedStrings = 0;

        for (int item : numArr) {
            sum += item;
            if (sum == 0) {
                balancedStrings++;
            }
        }
        return balancedStrings + 1;

    }
}