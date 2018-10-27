const assert = require('assert');
const sumOfOther = require('./sumOfOther.js');
const make = require('./make.js');

describe('sumOfOther', () => {
  it('array', () => {
    const sum = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(sum, [8, 7, 6, 9]);
  });
  it('1 elem', () => {
    const sum = sumOfOther([10]);
    assert.deepEqual(sum, [0]);
  });
  it('negative elem', () => {
    const sum = sumOfOther([10, 30, 5, -20]);
    assert.deepEqual(sum, [15, -5, 20, 45]);
  });
  it('all negative elem', () => {
    const sum = sumOfOther([-10, -30, -5, -20]);
    assert.deepEqual(sum, [-55, -35, -60, -45]);
  });
});

describe('make', () => {
  const sum = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const double = (a, b) => a + b * 2;

  it('array', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });
  it('one ()', () => {
    const result = make(1, 2, 3, 4)(sum);
    assert.deepEqual(result, 10);
  });
  it('negative number', () => {
    const result = make(-5, -10, -9, -4)(sum);
    assert.deepEqual(result, -28);
  });

  it('minus array', () => {
    const result = make(15)(34, 21, 666)(41)(minus);
    assert.deepEqual(result, -777);
  });

  it('empty ()', () => {
    const result = make(15)()()(41)()(minus);
    assert.deepEqual(result, -56);
  });

  it('double', () => {
    const result = make(15)(41)(double);
    assert.deepEqual(result, 112);
  });
});
