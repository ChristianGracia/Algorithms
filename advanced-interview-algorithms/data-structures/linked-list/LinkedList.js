class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(14);
console.log(linkedList)

linkedList.prepend(1);
console.log(linkedList)