
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ArrayList<Integer> num1 = new ArrayList<Integer>();
    ArrayList<Integer> num2 = new ArrayList<Integer>();
        
        int counter3 = 1;
        int counter4 = 1;
        
        while(l1.next != null){
            num1.add(l1.val);
                l1 = l1.next;
            counter3++;
    
        }
        
               while(l2.next != null){
            num2.add(l2.val);
                l2 = l2.next;
                   counter4++;
     
        }
        
        num1.add(l1.val);
         num2.add(l2.val);
        Collections.reverse(num1);
        Collections.reverse(num2);
        int sum1 = 0;
        int sum2 = 0;
        

        
        for (Integer i : num1){
            sum1 += Math.pow(10, counter3 -1) * i;
            counter3--;
            
        }
         for (Integer i : num2){
                sum2 += Math.pow(10, counter4 -1) * i;
             counter4--;
        }

        int doubleSum = sum1 + sum2;
 

            ArrayList<Integer> finalNums = new ArrayList<Integer>();
        while(doubleSum > 9){
            finalNums.add(doubleSum % 10);
            doubleSum = doubleSum / 10;
        }
        finalNums.add(doubleSum);
        


           ListNode list = new ListNode(finalNums.get(0));
        int size = finalNums.size() - 1;
  
     
            int counter2 = 1;
           ListNode last = list;
           while(size > 0 ){
           
               
           ListNode tmp = new ListNode(finalNums.get(counter2));
           last.next = tmp;
           last = last.next;
         
               size--;
               counter2++;
           }
               return list;


    }

}