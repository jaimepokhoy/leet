const targetPairSum = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[start] + arr[end] === target) {
      return [start, end];
    } else if (arr[start] + arr[end] > target) {
      console.log("dec");
      end--;
    } else {
      console.log("inc");
      start++;
    }
  }
};

const arr = [1, 2, 3, 4, 6];
const target = 6;

console.log(targetPairSum(arr, target));
