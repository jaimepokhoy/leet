const sortedSquares = (nums) => {
  const squared = nums.map((number) => number * number);
  return squared.sort((a, b) => a - b);
};

const nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));
