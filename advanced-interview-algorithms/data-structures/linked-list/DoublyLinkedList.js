class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        } else {
            const newNode = new Node(value);
            const prevNode = this.traverseToIndex(index-1);
            const nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;

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
        removedNode.next.prev = precedingNode;
        this.length--;
        return this.printList()
    }
}

const doubleLinkedList = new DoublyLinkedList(10);
doubleLinkedList.append(5);
doubleLinkedList.append(143);
doubleLinkedList.append(14);


// console.log(doubleLinkedList.printList());
// console.log(doubleLinkedList.prepend(1));
// console.log(doubleLinkedList.printList());
// // doubleLinkedList.insert(2, 333333)
console.log(doubleLinkedList.printList());
doubleLinkedList.remove(1)
console.log(doubleLinkedList.printList());