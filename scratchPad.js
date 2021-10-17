const pairSum = (arr, sum) => {
  let left = 0;
  let right = arr.length - 1;

  // for (let i = 0; i < arr.length; i++) {
  while (left < right) {
    if (arr[left] + arr[right] === sum) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > sum) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};

const arr = [1, 2, 4, 4];
const sum = 8;

console.log(pairSum(arr, sum));
