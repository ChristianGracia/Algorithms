
public class Solution {
    public ListNode ReverseList(ListNode head) {
        
        ListNode trav = head;
        List<int> numList = new List<int>();
        numList.Add(head.val);

        while(trav.next != null){
            trav = trav.next;
            numList.Add(trav.val);
        }
        numList.Reverse();
        ListNode returnNode =  new ListNode(numList[0]);
        trav = returnNode;
      
        
        for(int i = 1; i < numList.Count; i++){   
            trav.next = new ListNode(numList[i]);
            trav = trav.next;

        }
        return returnNode;

    }
}