class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ArrayList<Integer> listL1 = new ArrayList<Integer>();
        ArrayList<Integer> listL2 = new ArrayList<Integer>();

        int l1Counter = 1;
        int l2Counter = 1;

        while (l1.next != null) {
            listL1.add(l1.val);
            l1 = l1.next;
            l1Counter++;

        }

        while (l2.next != null) {
            listL2.add(l2.val);
            l2 = l2.next;
            l2Counter++;

        }

        listL1.add(l1.val);
        listL2.add(l2.val);
        Collections.reverse(listL1);
        Collections.reverse(listL2);
        int linkedNumber1 = 0;
        int linkedNumber2 = 0;

        for (Integer i : listL1) {
            linkedNumber1 += Math.pow(10, l1Counter - 1) * i;
            l1Counter--;

        }
        for (Integer i : listL2) {
            linkedNumber2 += Math.pow(10, l2Counter - 1) * i;
            l2Counter--;
        }

        int doubleSum = linkedNumber1 + linkedNumber2;

        ArrayList<Integer> finalNums = new ArrayList<Integer>();

        while (doubleSum > 9) {
            finalNums.add(doubleSum % 10);
            doubleSum = doubleSum / 10;
        }
        finalNums.add(doubleSum);

        ListNode list = new ListNode(finalNums.get(0));
        int size = finalNums.size() - 1;

        int counter2 = 1;
        ListNode last = list;
        while (size > 0) {

            ListNode tmp = new ListNode(finalNums.get(counter2));
            last.next = tmp;
            last = last.next;

            size--;
            counter2++;

        }
        return list;
    }

}