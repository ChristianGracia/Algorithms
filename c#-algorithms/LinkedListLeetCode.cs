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

        int sum = Integer.parseInt(num1String) + Integer.parseInt(num2String);
        System.out.println(sum);
        String stringSum = Integer.toString(sum);
        
        int[] arr = new int[stringSum.length()];
        
        int counter = 0;
        int size = stringSum.length() - 1;
        
        for(int i = size; i > -1; i--){
       
            arr[counter++] += Character.getNumericValue(stringSum.charAt(i));
        
        }
        
        int counter2 = 1;


           ListNode list = new ListNode(arr[0]);
  
        if (size > 0) {

           ListNode last = list;
           while(size > 0 ){
               
           ListNode tmp = new ListNode(arr[counter2]);
           last.next = tmp;
           last = last.next;
         
               size--;
               counter2++;
           }
               return list;
        }
        return list;
    }

}