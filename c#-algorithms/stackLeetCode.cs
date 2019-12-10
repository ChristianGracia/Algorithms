public class MinStack {
    public List<int> stack {get;set;}
    

  
    public MinStack() {
        this.stack = new List<int>();
    }
    
    public void Push(int x) {

        this.stack.Add(x);
    }
    
    public void Pop() {

        this.stack.RemoveAt(this.stack.Count - 1);
  
    }
    
    public int Top() {
       
        return this.stack[this.stack.Count-1];
        
    }
    
    public int GetMin() {
           return this.stack.Min(x => x);
        
    }
}