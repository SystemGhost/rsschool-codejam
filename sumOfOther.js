module.exports = function sumOfOther(arg) {
  const arr = [];
  const result = arg.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  for (let i = 0; i < arg.length; i += 1) {
    arr[i] = result - arg[i];
  }
  return arr;
};
