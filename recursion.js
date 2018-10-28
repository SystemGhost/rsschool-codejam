module.exports = function recursion(current, depth = 0) {
  if (depth === 0) this.stack = [];
  let children = current.left;

  if (this.stack[depth] === undefined) this.stack[depth] = [];

  this.stack[depth].push(current.value);

  if (children !== undefined) recursion(children, depth + 1);
  children = current.right;
  if (children !== undefined) recursion(children, depth + 1);

  return this.stack;
};
