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
        while (temp) {
            console.log(temp.value);
            temp = temp.previous;
        }
    }
    addNodeAt(index, val) {
        if (index > this.count || index < 0) {
            console.log('cant insert in an index bigger than count of linked list or negative index');
            return;
        }

        let nodeToInsert = new Node(val, null, null);
        let i = 0;
        let temp = this.head;
        if (index === 0) {
            nodeToInsert.next = this.head;
            nodeToInsert.previous = null;
            this.head = nodeToInsert;
        }
        while (temp) {
            if (i === index - 1) {
                nodeToInsert.next = temp.next;
                nodeToInsert.previous = temp.previous;
                temp.next = nodeToInsert;
                this.count++;
                break;
            }
            temp = temp.next;
            i++;
        }
        this.count++;
    }
    deleteNodeAt(index) {
        if (index > this.count || index < 0) {
            console.log('cant delete index bigger than count or negative');
            return;
        }
        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        }
        let temp = this.head;
        let i = 0;
        while (temp) {
            if (i === index) {
                // take previous node and assign its next to the (to be deleted node) next. 20 5
                // assign the to be deleted node next previous node to the to be deleted previous.
                // deleting by assinging the node to null
                temp.previous.next = temp.next;
                if (temp.next) {
                    temp.next.previous = temp.previous;
                }
                temp = null;
                break;
            }
            i++;
            temp = temp.next;
        }
        this.count--;
    }
}
let l = new LinkedList();
l.addNode(20);
l.addNode(10);
l.addNode(5);
l.addNode(0);
l.traverse();
console.log('..>>..');
l.deleteNodeAt(1);
l.deleteNodeAt(1);
l.deleteNodeAt(1); // 20 5
l.traverse();
console.log('..>>..');
// l.traverseInverse();