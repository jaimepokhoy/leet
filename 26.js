const removeDuplicates = (nums) => {
  let x = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[x] !== nums[i]) {
      x++;
      nums[x] = nums[i];
    }
  }

  console.log(nums);
  return x + 1;
};

let nums = [1, 1, 2];

console.log(removeDuplicates(nums));
