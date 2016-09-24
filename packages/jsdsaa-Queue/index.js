const LinkedList = require('jsdsaa-LinkedList');
const Node = require('./Node');

module.exports = class Queue {
  constructor(n) {
    this.id = Math.floor(Math.random() * 9999999999);
    if (n !== undefined) {
      n = new Node(n);
    }
    this._ll = new LinkedList(n);
    this._tail = n;
  }

  enqueue(n) {
    n = new Node(n);
    if (!this._tail) {
      this._ll.head = n;
      this._tail = n;
    } else {
      this._tail.next = n;
      this._tail = n
    }
  }

  dequeue() {
    if (!this._ll.head) {
      return undefined;
    } else {
      const first = this._ll.head;
      this._ll.head = this._ll.head.next;
      return first.value;
    }
  }

  peek() {
    return this._ll.head.value;
  }

  get length() {
    return this._ll.length;
  }

  hash() {
    return this.id;
  }

  toString() {
    return 'Queue: ' + this.id;
  }
}
