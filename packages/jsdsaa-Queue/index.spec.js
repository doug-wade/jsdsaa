const Queue = require('.');

test(`Queue has an id`, () => {
  const underTest = new Queue();

  expect(typeof underTest.id).toEqual('number');
});

test(`Queue has a toString()`, () => {
  const underTest = new Queue();

  expect(typeof underTest.toString()).toEqual('string');
});

test(`Queue head can be set via constructor`, () => {
  const q = new Queue(0);

  expect(q.length).toBe(1);
  expect(q.peek()).toBe(0);
});

test(`length returns 0 for an empty Queue`, () => {
  const q = new Queue();
  expect(q.length).toBe(0);
});

test(`length returns 1 for a Queue with one element`, () => {
  const q = new Queue(12);
  expect(q.length).toBe(1);
});

test(`length returns 2 for a Queue with two elements`, () => {
  const q = new Queue(1);
  q.enqueue(2);
  expect(q.length).toBe(2);
});

test(`dequeue removes a node from the queue`, () => {
  const val = "val";
  const q = new Queue(val);

  expect(q.dequeue()).toBe(val);
  expect(q.length).toBe(0);
});

test(`enqueue adds a node to the queue`, () => {
  const q = new Queue();
  const val = '';
  q.enqueue(val);

  expect(q.length).toBe(1);
  expect(q.peek()).toBe(val);
  expect(q.dequeue()).toBe(val);
});

test(`queue is first-in first-out`, () => {
  const q = new Queue();
  q.enqueue(0);
  q.enqueue(1);

  expect(q.peek()).toBe(0);
  expect(q.dequeue()).toBe(0);
  expect(q.peek()).toBe(1);
  expect(q.dequeue()).toBe(1);
});
