const permute = nums => {
  const list = [];

  backtrack(list, [], nums);
  return list;
};

const backtrack = (list, tempList, nums) => {
  if (tempList.length === nums.length) {
    list.push(tempList.slice(0));
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) continue;
      tempList.push(nums[i]);
      backtrack(list, tempList, nums);
      tempList.pop();
    }
  }
};

const nums = [1, 2, 3];
console.log(permute(nums));
