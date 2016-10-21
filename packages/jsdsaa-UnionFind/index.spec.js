const UnionFind = require('.');

test(`UnionFind has an id`, () => {
  const underTest = new UnionFind(10);

  expect(typeof underTest.id).toEqual('number');
});

test(`UnionFind count returns length when no unions have been performed`, () => {
  const size = 10;
  const underTest = new UnionFind(size);

  expect(underTest.count()).toEqual(size);
});

test(`UnionFind count returns length - 1 when one union has been performed`, () => {
  const size = 10;
  const underTest = new UnionFind(size);
  underTest.union(0, 1);

  expect(underTest.count()).toEqual(size - 1);
});

test(`UnionFind count returns length - 2 when two unions have been performed`, () => {
  const size = 10;
  const underTest = new UnionFind(size);
  underTest.union(0, 1);
  underTest.union(1, 3);

  expect(underTest.count()).toEqual(size - 2);
});

test(`UnionFind find returns true for the same element`, () => {
  const size = 10;
  const underTest = new UnionFind(size);

  expect(underTest.find(5, 5)).toBeTruthy();
});

test(`UnionFind find returns false for different elements when union has not been called`, () => {
  const size = 10;
  const underTest = new UnionFind(size);

  expect(underTest.find(4, 5)).toBeFalsy();
});

test(`UnionFind find returns true for different elements after they have been unioned`, () => {
  const size = 10;
  const underTest = new UnionFind(size);
  underTest.union(4, 5);

  expect(underTest.find(4, 5)).toBeTruthy();
});

test(`UnionFind find returns true for different elements after they have been transitively unioned`, () => {
  const size = 10;
  const underTest = new UnionFind(size);
  underTest.union(3, 4);
  underTest.union(4, 5);

  expect(underTest.find(3, 5)).toBeTruthy();
});

test(`UnionFind has a toString()`, () => {
  const underTest = new UnionFind(10);

  expect(typeof underTest.toString()).toEqual('string');
});


test(`UnionFind validates constructor arguments`, () => {
  expect(() => new UnionFind()).toThrowError(new Error('length is required!'));
  expect(() => new UnionFind('foo')).toThrowError(new Error('length must be a number; got: foo'));
});

test(`UnionFind validates find arguments`, () => {
  const underTest = new UnionFind(2);

  expect(() => underTest.find(1)).toThrowError(new Error('a and b are required!'));
  expect(() => underTest.find(1, 'foo')).toThrowError(new Error('a and b must be numbers; got a: 1; b: foo'));
  expect(() => underTest.find(1, 100)).toThrowError(new Error('a and b must be smaller than the number of elements; got a: 1; b: 100; len: 2'));
});

test(`UnionFind validates union arguments`, () => {
  const underTest = new UnionFind(2);

  expect(() => underTest.union(1)).toThrowError(new Error('a and b are required!'));
  expect(() => underTest.union(1, 'foo')).toThrowError(new Error('a and b must be numbers; got a: 1; b: foo'));
  expect(() => underTest.union(1, 100)).toThrowError(new Error('a and b must be smaller than the number of elements; got a: 1; b: 100; len: 2'));
})
