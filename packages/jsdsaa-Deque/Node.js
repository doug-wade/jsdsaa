module.exports = class Node {
  constructor(val) {
    this.id = Math.floor(Math.random() * 9999999999);
    this.value = val;
  }

  hash() {
    return this.id;
  }

  toString() {
    return 'Deque Node: ' + this.id;
  }
}
