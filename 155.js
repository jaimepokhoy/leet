const MinStack = function() {
  this.min = [];
  this.stack = [];
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
};

MinStack.prototype.pop = function() {
  this.stack.pop();
};

MinStack.prototype.getMin = function() {
  let min = this.stack.length && this.stack[0];

  this.stack.forEach(item => {
    if (item < min) {
      min = item;
    }
  });
  return min;
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.top());
// console.log(minStack.getMin());

// console.log(minStack.stack);
