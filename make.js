module.exports = function make(...arg) {
  const arr = [];
  arr.push(...arg);
  function f(...b) {
    arr.push(...b);
    if (typeof arr[arr.length - 1] === 'function') {
      const func = arr.pop();
      return arr.reduce(func, 0);
    }
    return f;
  }
  return f;
};
