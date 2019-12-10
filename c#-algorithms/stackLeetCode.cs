public class MinStack {
    List<int> stack {get;set;}
    

  
    public MinStack() {
        stack = new List<int>();
    }
    
    public void Push(int x) {

        stack.Add(x);
    }
    
    public void Pop() {

        stack.RemoveAt(stack.Count - 1);
  
    }
    
    public int Top() {
       
        return stack[stack.Count-1];
        
    }
    
    public int GetMin() {
           return stack.Min(x => x);
        
    }
}
