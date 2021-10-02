const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    
    
    if (map.has(target - nums[i])) {
      return [i, map.get(target- nums[i])];
    }
    
    map.set(nums[i], i);
  }
}

const nums = [3, 2, 4];
const target = 6;

console.log(twoSum(nums, target));