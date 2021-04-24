const generateParenthesis = n => {
  const result = [];
  let output = "";

  generate(result, output, 0, n, 0, 0);
  return result;
};

const generate = (result, output, depth, n, left, right) => {
  if (depth === 2 * n) {
    result.push(output);
    return;
  }

  if (left < n) {
    console.log("left");
    console.log(output + "(");
    generate(result, output + "(", depth + 1, n, left + 1, right);
  }

  if (left > right) {
    console.log("right");
    console.log(output + ")");
    generate(result, output + ")", depth + 1, n, left, right + 1);
  }
};

console.log(generateParenthesis(3));
