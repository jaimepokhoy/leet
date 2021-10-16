const minDifference = (nums) => {
  if (nums.length <= 4) return 0;

  nums.sort((a, b) => a - b);
  // [0, 1, 5, 10, 14]

  let i = 0;
  let j = nums.length - 4; // 1

  let min = Infinity;

  while (i <= 3) {
                    // 1 - 0
                    // 5 - 1
                    // 10 - 3
                    // 14 - 20
    min = Math.min(nums[j] - nums[i], min);

    i++;
    j++;
  }

  return min;
};

const nums = [1, 5, 0, 10, 14];

console.log(minDifference(nums));
