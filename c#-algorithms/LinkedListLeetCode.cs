/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ArrayList<Integer> num1 = new ArrayList<Integer>();
    ArrayList<Integer> num2 = new ArrayList<Integer>();
        
        while(l1.next != null){
            num1.add(l1.val);
                l1 = l1.next;
        
                
        }
        
               while(l2.next != null){
            num2.add(l2.val);
                l2 = l2.next;
        
                
        }
        
        num1.add(l1.val);
         num2.add(l1.val);
        Collections.reverse(num1);
            Collections.reverse(num2);
        
        int sum = Integer.parseInt(num1) + Integer.parseInt(num2);
        System.out.println(sum);


        return l1;
        
        
    }
}