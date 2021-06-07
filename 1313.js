const decompressRLEList = (nums) => {
  const answer = [];

  const pairs = nums.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);

  for (let i = 0; i < pairs.length; i++) {
    for (let x = 0; x < pairs[i][0]; x++) {
      answer.push(pairs[i][1]);
    }
  }

  return answer;
};

const nums = [1, 2, 3, 4];
console.log(decompressRLEList(nums));
// [2, 4, 4, 4]
