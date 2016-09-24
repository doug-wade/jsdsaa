const Deque = require('.');

test(`Deque has an id`, () => {
  const underTest = new Deque();

  expect(typeof underTest.id).toEqual('number');
});

test(`Deque has a toString()`, () => {
  const underTest = new Deque();

  expect(typeof underTest.toString()).toEqual('string');
});

test(`unshift and shift operate on the front of the deque`, () => {
  const d = new Deque(0);
  const val = 42;
  d.unshift(val);

  expect(d.length).toBe(2);
  expect(d.head).toBe(val);
  expect(d.shift()).toBe(val);
});

test(`push and pop operate on the back of the deque`, () => {
  const d = new Deque(0);
  const val = 42;
  d.push(val);

  expect(d.length).toBe(2);
  expect(d.tail).toBe(val);
  expect(d.pop()).toBe(val);
});

test('iterate works on an empty deque', () => {
  const values = [];
  const d = new Deque();
  values.forEach(d.push);

  const actual = [];
  d.iterate(actual.push);

  expect(values).toEqual(actual);
});
