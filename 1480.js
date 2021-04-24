const runningSum = (nums) => {
  let total = 0;

  const ans = nums.map((num) => {
    let temp = num + total;
    total += num;
    return temp;
  });

  return ans;
};

const nums = [1, 2, 3, 4];

console.log(runningSum(nums));
