const find_subsets = (nums) => {
  const results = [[]];

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];

    for (let x = 0; x < results.length; x++) {
      let copy = results[x].splice(0);

      copy.push(currNum);
      results.push(copy);
    }
  }

  return results;
};

// const nums = [1, 3];

const nums = [1, 5, 3];
// [], [1], [3], [1, 3]

console.log(find_subsets(nums));
