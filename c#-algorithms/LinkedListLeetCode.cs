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
    
        String num1 = "";
        String num2 = "";
        
        while(l1.next != null){
            num1 += Integer.toString(l1.val);
                l1 = l1.next;
        
                
        }
        
               while(l2.next != null){
            num2 += Integer.toString(l2.val);
                l2 = l2.next;
        
                
        }
        
        num1 += l1.val;
         num2 += l1.val;
        System.out.println(num1);
            System.out.println(num2);

        return l1;
        
        
    }
}