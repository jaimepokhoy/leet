const removeElement = function(nums, val) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      // nums[i] = nums[i + 1]
      nums.splice(i, 1);
      i--;
    }
  }

  return nums;
}

const nums = [3, 2, 2, 3];
const val = 3;

console.log(removeElement(nums, val));