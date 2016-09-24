module.exports = class <%= packageName.replace('jsdsaa-', '') %> {
  constructor() {
    this.id = Math.floor(Math.random() * 9999999999);
  }

  hash() {
    return this.id;
  }

  toString() {
    return '<%= packageName.replace('jsdsaa-', '') %>: ' + this.id;
  }
}
