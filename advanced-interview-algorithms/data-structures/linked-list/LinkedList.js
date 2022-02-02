class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        } else {
            const newNode = new Node(value);
            const precedingNode = this.traverseToIndex(index-1);
            const tmp = precedingNode.next;
            precedingNode.next = newNode;
            newNode.next = tmp;
            this.length++;
            return this;
        }
    }
    traverseToIndex(number) {
        let counter = 0;
        let trav = this.head;
        while(counter !== number) {
            trav = trav.next;
            counter++;
        }
        return trav;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    remove(index) {
        const precedingNode = this.traverseToIndex(index - 1);
        const removedNode = precedingNode.next;
        precedingNode.next = removedNode.next;
        this.length--;
        return this.printList()
    }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(14);


console.log(linkedList.printList());
linkedList.prepend(1);
console.log(linkedList.printList());
linkedList.insert(2, 333333)
console.log(linkedList.printList());
linkedList.remove(2)
console.log(linkedList.printList());