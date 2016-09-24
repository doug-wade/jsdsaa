module.exports = class Node {
  constructor(value, n) {
    this.id = Math.floor(Math.random() * 9999999999);
    this.value = value;

    this._next = n;
  }

  set next(node) {
    if (!node instanceof Node) {
      throw new Error(`Type error: node ${node} isn't an instance of LinkedList/Node`);
    }
    this._next = node;
  }

  get next() {
    return this._next;
  }

  hash() {
    return this.id;
  }

  toString() {
    return 'LinkedList: ' + this.id;
  }
}
