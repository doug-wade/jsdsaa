const Node = require('./Node');

module.exports = class Deque {
  constructor(val) {
    this.id = Math.floor(Math.random() * 9999999999);
    if (val !== undefined) {
      val = new Node(val);
    }
    this._head = val;
    this._tail = val;
  }

  // Insert element at the back
  push(val) {
    val = new Node(val);
    if (!this._tail) {
      this._tail = val;
      this._head = val;
    } else {
      this._tail.next = val;
      val.prev = this._tail;
      this._tail = val;
    }
  }

  // Insert element at the front
  unshift(val) {
    val = new Node(val);
    if (!this._head) {
      this._head = val;
      this._tail = val;
    } else {
      this._head.prev = val;
      val.next = this._head;
      this._head = val;
    }
  }

  // Remove first element
  shift() {
    const first = this._head;
    this._head = first.next;
    return first.value;
  }

  // Remove last element
  pop() {
    const last = this._tail;
    this._tail = last.prev;
    return last.value;
  }

  // Iterate from head to tail
  iterate(cb) {
    let n = this._head;
    while (n) {
      cb(n);
      n = n.next;
    }
  }

  get length() {
    if (!this._head) {
      return 0;
    } else {
      let count = 0;
      this.iterate(() => {
        count++;
      });
      return count;
    }
  }

  get head() {
    return this._head.value;
  }

  get tail() {
    return this._tail.value;
  }

  hash() {
    return this.id;
  }

  toString() {
    return 'Deque: ' + this.id;
  }
}
