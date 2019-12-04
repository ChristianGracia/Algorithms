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

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int rem;

        if (l1.val + l2.val >= 10) {
            rem = 1;
        } else {
            rem = 0;
        }

        int sum = ((l1.val + l2.val) % 10);
        ListNode head = new ListNode(sum);
        ListNode current = head;
        l1 = l1.next;
        l2 = l2.next;

        while (l1 != null && l2 != null) {
            sum = (l1.val + l2.val + rem) % 10;
            if (l1.val + l2.val + rem >= 10) {
                rem = 1;
            } else {
                rem = 0;
            }
            ListNode next = new ListNode(sum);
            current.next = next;
            current = current.next;
            l1 = l1.next;
            l2 = l2.next;
        }

        while (l1 != null && l2 == null) {
            sum = (l1.val + rem) % 10;
            ListNode next = new ListNode(sum);
            current.next = next;
            current = current.next;
            if (l1.val + rem == 10) {
                rem = 1;
            } else {
                rem = 0;
            }
            l1 = l1.next;
        }

        while (l2 != null && l1 == null) {
            sum = (l2.val + rem) % 10;
            ListNode next = new ListNode(sum);
            current.next = next;
            current = current.next;
            if (l2.val + rem == 10) {
                rem = 1;
            } else {
                rem = 0;
            }
            l2 = l2.next;
        }

        if (l1 == null && l2 == null && rem == 1) {
            ListNode next = new ListNode(rem);
            current.next = next;
            current = current.next;
        }

        return head;

    }

}