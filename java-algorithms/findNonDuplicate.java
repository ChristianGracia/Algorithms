class Solution {
    public int singleNumber(int[] nums) {
        ArrayList<Integer> numsList = new ArrayList<Integer>();

        for (int num : nums) {
            if (!numsList.contains(num)) {
                numsList.add(num);
            } else {
                numsList.removeIf(item -> item == num);
            }
        }
        return numsList.get(0);
    }
}