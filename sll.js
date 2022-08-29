class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let cur = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return cur.val;
    }

    let newTail = cur;
    while (cur.next) {
      newTail = cur;
      cur = cur.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return cur.val;
  }

  shift() {
    if (!this.head) return undefined;

    if (this.length === 1) this.tail = null;

    let cur = this.head;
    this.head = cur.next;
    this.length--;
    return cur.val;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) this.tail = newNode;
    else newNode.next = this.head;

    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let cur = this.head;
    let count = 0;
    while (count < index) {
      cur = cur.next;
      count++;
    }
    return cur;
  }
}
