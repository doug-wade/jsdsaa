const <%= packageName.replace('jsdsaa-', '') %> = require('.');

test(`<%= packageName.replace('jsdsaa-', '') %> has an id`, () => {
  const underTest = new <%= packageName.replace('jsdsaa-', '') %>();

  expect(typeof underTest.id).toEqual('number');
});

test(`<%= packageName.replace('jsdsaa-', '') %> has a toString()`, () => {
  const underTest = new <%= packageName.replace('jsdsaa-', '') %>();

  expect(typeof underTest.toString()).toEqual('string');
});
