const shuffle = (nums, n) => {
  let res = [];
  for (i = 0; i < n; i++) {
    res.push(nums[i], nums[i + n]);
  }

  return res;
};

const nums = [1, 2, 3, 4, 4, 3, 2, 1];
const n = 4;

console.log(shuffle(nums, n));
