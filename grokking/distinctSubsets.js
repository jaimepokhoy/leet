const find_subsets = (nums) => {
  return nums.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );
};

const nums = [1, 3, 3];
const ans = find_subsets(nums);

console.log([...new Set(ans)]);
