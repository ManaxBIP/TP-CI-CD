const test = require('node:test');
const assert = require('node:assert');
const { sum, formatMessage, isValidEmail } = require('./utils');

test('utils - sum()', () => {
  // Test addition
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(0, 0), 0);

  // Test error throwing for non-numbers
  assert.throws(() => {
    sum('2', 3);
  }, TypeError);
});

test('utils - formatMessage()', () => {
  assert.strictEqual(formatMessage(' hello '), 'HELLO');
  assert.strictEqual(formatMessage(''), '');
  assert.strictEqual(formatMessage(null), '');
});

test('utils - isValidEmail()', () => {
  assert.strictEqual(isValidEmail('test@example.com'), true);
  assert.strictEqual(isValidEmail('invalid-email'), false);
  assert.strictEqual(isValidEmail(12345), false);
});
