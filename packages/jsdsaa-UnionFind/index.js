const arr = Symbol('arr');

module.exports = class UnionFind {
  constructor(length) {
    if ([undefined, null].includes(length)) {
      throw new Error('length is required!');
    } else if (typeof length !== 'number') {
      throw new Error(`length must be a number; got: ${length}`);
    }

    this.id = Math.floor(Math.random() * 9999999999);

    this[arr] = [];
    for (let i = 0; i < length; i++) {
      this[arr][i] = i;
    }
  }

  count() {
    return (new Set(this[arr])).size;
  }

  find(a, b) {
    if ([undefined, null].includes(a) || [undefined, null].includes(b)) {
      throw new Error('a and b are required!');
    } else if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error(`a and b must be numbers; got a: ${a}; b: ${b}`);
    } else if (a > this[arr].length || b > this[arr].length) {
      throw new Error(`a and b must be smaller than the number of elements; got a: ${a}; b: ${b}; len: ${this[arr].length}`)
    }

    return this[arr][a] === this[arr][b];
  }

  union(a, b) {
    if ([undefined, null].includes(a) || [undefined, null].includes(b)) {
      throw new Error('a and b are required!');
    } else if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error(`a and b must be numbers; got a: ${a}; b: ${b}`);
    } else if (a > this[arr].length || b > this[arr].length) {
      throw new Error(`a and b must be smaller than the number of elements; got a: ${a}; b: ${b}; len: ${this[arr].length}`)
    }

    const idA = this[arr][a];
    const idB = this[arr][b];

    this[arr] = this[arr].map(e => e === idA ? idB : e);
  }

  hash() {
    return this.id;
  }

  toString() {
    return 'UnionFind: ' + this.id;
  }
}
