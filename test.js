/* eslint-disable */
const assert = require('assert');
const sumOfOther = require('./sumOfOther.js');
const make = require('./make.js');
const recursion = require('./recursion.js');

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

describe('recursion', () => {
  it('recursion', () => {
    const tree = recursion({ "value": 100, "left": { "value": 90, "left": { "value": 70 }, "right": { "value": 99 } }, "right": { "value": 120, "left": { "value": 110 }, "right": { "value": 130 } } });
    assert.deepEqual(tree, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('1 element', () => {
    const tree = recursion({ "value": 50 });
    assert.deepEqual(tree, [[50]]);
  });

  it('undefined', () => {
    const tree = recursion({ "value": undefined, "left": { "value": undefined, "left": { "value": undefined }, "right": { "value": undefined } }, "right": { "value": undefined, "left": { "value": undefined }, "right": { "value": undefined } } });
    assert.deepEqual(tree, [[undefined], [undefined, undefined], [undefined, undefined, undefined, undefined]]);
  });

  it('undefined null', () => {
    const tree = recursion({ "value": undefined, "left": { "value": null, "left": { "value": undefined }, "right": { "value": null } }, "right": { "value": undefined, "left": { "value": null }, "right": { "value": undefined } } });
    assert.deepEqual(tree, [[undefined], [null, undefined], [undefined, null, null, undefined]]);
  });

  it('undefined null Infinity', () => {
    const tree = recursion({ "value": Infinity, "left": { "value": Infinity, "left": { "value": undefined }, "right": { "value": null } }, "right": { "value": undefined, "left": { "value": null }, "right": { "value": undefined } } });
    assert.deepEqual(tree, [[Infinity], [Infinity, undefined], [undefined, null, null, undefined]]);
  });

  it('string', () => {
    const tree = recursion({ "value": "Jackie", "left": { "value": "John", "left": { "value": "Boghdan" }, "right": { "value": "Vadim" } }, "right": { "value": "Andrey", "left": { "value": "Vitaliy" }, "right": { "value": "Java Script" } } });
    assert.deepEqual(tree, [["Jackie"], ["John", "Andrey"], ["Boghdan", "Vadim", "Vitaliy", "Java Script"]]);
  });

  it('long tree', () => {
    const tree = recursion({ "value": 100, "left": { "value": 90, "left": { "value": 70, "left": { "value": 70 }, "right": { "value": 99 } }, "right": { "value": 99, "left": { "value": 70 }, "right": { "value": 99 } } }, "right": { "value": 120, "left": { "value": 110, "left": { "value": 70 }, "right": { "value": 99 } }, "right": { "value": 130, "left": { "value": 70 }, "right": { "value": 99 } } } });
    assert.deepEqual(tree, [[100], [90, 120], [70, 99, 110, 130], [70, 99, 70, 99, 70, 99, 70, 99]]);
  });

});