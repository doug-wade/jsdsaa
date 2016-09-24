const LinkedList = require('.');
const Node = require('./Node');

test(`linkedlist has an id`, () => {
  const ll = new LinkedList();

  expect(typeof ll.id).toEqual('number');
});

test(`linkedlist has a toString()`, () => {
  const ll = new LinkedList();

  expect(typeof ll.toString()).toEqual('string');
});

test(`linkedlist head can be set directly`, () => {
  const ll = new LinkedList();
  const testNode = new Node(42);
  ll.head = testNode;

  expect(ll.length).toBe(1);
  expect(ll.head).toBe(testNode);
});

test(`linkedlist head can be set via constructor`, () => {
  const testNode = new Node(42);
  const ll = new LinkedList(testNode);

  expect(ll.length).toBe(1);
  expect(ll.head).toBe(testNode);
});

test('iterate moves through items in order', () => {
  const values = [1,2,3];
  const ll = new LinkedList();
  let cursor;

  values.forEach((v) => {
    if (!cursor) {
      cursor = new Node(v);
      ll.head = cursor;
    } else {
      cursor.next = new Node(v);
      cursor = cursor.next;
    }
  });

  const actual = [];
  ll.iterate((v) => {
    actual.push(v.value);
  });

  expect(values).toEqual(actual);
});

test(`length returns 0 for an empty linkedlist`, () => {
  const ll = new LinkedList();
  expect(ll.length).toBe(0);
});

test(`length returns 1 for a linkedlist with one element`, () => {
  const ll = new LinkedList(new Node(12));
  expect(ll.length).toBe(1);
});

test(`length returns 2 for a linkedlist with two elements`, () => {
  const n = new Node(12);
  n.next = new Node(14);
  const ll = new LinkedList(n);
  expect(ll.length).toBe(2);
});
