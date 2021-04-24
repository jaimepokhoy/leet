const isValid = s => {
  const stack = [];

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (
        !top ||
        (top === "(" && char !== ")") ||
        (top === "[" && char !== "]") ||
        (top === "{" && char !== "}")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const input = "((";
console.log(isValid(input));
