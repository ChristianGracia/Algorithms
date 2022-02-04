class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
  

// as linked list
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        console.log(this.top);
        return this.top;
    }
    push(value){
        const newNode = new Node(value);

        if (this.length = 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            const tmp = this.top
            this.top = newNode;
            this.top.next = tmp;
        }
        
        this.length++;
        return this
    }
    pop(){
        if (!this.top) {
            return null 
        }

        if(this.top === this.bottom) {
            this.bottom = null;
        }
        const tmp = this.top;
        this.top = this.top.next;
        this.length--;
        return tmp;
    }
}

const stack = new Stack();

stack.push(3);
stack.push(4)
console.log(stack.pop());
console.log(stack.pop())
console.log(stack.pop())
stack.peek();

// as array



class ArrayStack {
    constructor(){
        this.array = []
    }
    peek() {
        return this.array[this.array.length-1]
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
}

const arrayStack = new ArrayStack();
arrayStack.push('43');
console.log(arrayStack.peek());
arrayStack.push('3343');
console.log(arrayStack.peek());
console.log(arrayStack.pop());
console.log(arrayStack.peek());
console.log(arrayStack.pop());
console.log(arrayStack.peek());