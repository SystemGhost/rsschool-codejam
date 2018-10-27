function sumOfOther(arg) {
  let arr = [];
  let result = arg.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);

  for(let i = 0; i < arg.length; i++) {
    arr[i] = result - arg[i];
  }
  return arr;
}