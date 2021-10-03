const maxSub = (arr, k) => {
  const options = [];

  for (let i = 0; i < arr.length - k + 1; i++) {
    options.push(arr.slice(i, i + k));
  }

  const transformed = options.map((option) =>
    option.reduce((acc, num) => acc + num, 0)
  );

  return Math.max(...transformed);
};

const optMaxSub = (arr, k) => {
  let max = 0;
  let curr;

  for (let i = 0; i < arr.length - k + 1; i++) {
    curr = arr.slice(i, i + k).reduce((acc, num) => acc + num, 0);
    max = Math.max(curr, max);
  }

  return max;
};

const input = [2, 1, 5, 1, 3, 2];
const k = 3;

console.log(optMaxSub(input, k));
