class Node {
    constructor(value, next, previous) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}
class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }
    addNode(value) {
        let temp = new Node(value, null, null);
        // checks if size is zero to assign both start and end to it.
        if (this.count === 0) {
            this.head = temp;
            this.tail = temp;
        } else {
            this.tail.next = temp;
            temp.previous = this.tail;
            this.tail = temp;
        }
        this.count++;
    }
    traverse() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    traverseInverse() {
        let temp = this.tail;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.previous;
        }
    }
}
let l = new LinkedList();
l.addNode(20);
l.addNode(10);
l.addNode(5);
l.addNode(0);
l.traverse();
l.traverseInverse();