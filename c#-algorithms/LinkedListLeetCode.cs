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
         num2.add(l2.val);
        Collections.reverse(num1);
            Collections.reverse(num2);
        
        String num1String = "";
        String num2String = "";
        
        for (Integer i : num1){
            num1String += Integer.toString(i);
            
        }
         for (Integer i : num2){
                num2String += Integer.toString(i);
        }
        System.out.println(num1String);
           System.out.println(num2String);
        
        int sum = Integer.parseInt(num1String) + Integer.parseInt(num2String);
        System.out.println(sum);
        String stringSum = Integer.toString(sum);
        
        // Integer.parseInt(sumString.charAt(0)));
        ListNode list = new ListNode(Character.getNumericValue(stringSum.charAt(2)));
           ListNode list1 = new ListNode(Character.getNumericValue(stringSum.charAt(1)));
           ListNode list2 = new ListNode(Character.getNumericValue(stringSum.charAt(0)));
            
            list.next = list1;
        list1.next = list2;
        // list.val = Integer.parseInt(sumString.charAt(2));
        // list.next.val = Integer.parseInt(sumString.charAt(1));
        // list.next.next.val = Integer.parseInt(sumString.charAt(0));
        
        


        return list;
        
        
    }
}