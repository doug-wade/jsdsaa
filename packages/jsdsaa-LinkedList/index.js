const Node = require('./Node');

module.exports = class LinkedList {
  constructor(head) {
    this.id = Math.floor(Math.random() * 9999999999);
    this._head = head;
  }

  set head(node) {
    if (!node instanceof Node) {
      throw new Error(`Type error: node ${node} isn't an instance of LinkedList/Node`);
    }
    this._head = node;
  }

  get head() {
    return this._head;
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

  iterate(cb) {
    let n = this._head;
    while (n) {
      cb(n);
      n = n.next;
    }
  }

  hash() {
    return this.id;
  }

  toString() {
    return 'LinkedList: ' + this.id;
  }
}
