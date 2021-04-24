// [1],
// [1,1],
// [1,2,1],
// [1,3,3,1],
// [1,4,6,4,1]

const generate = numRows => {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    let arr = [];
    arr[0] = arr[i] = 0;

    for (let j = 1; j < i; j++) {
      arr[j] = result[i - 1][j] + result[i - 1][j - 1];
    }
    result[i] = arr;
  }
  return result;
};
