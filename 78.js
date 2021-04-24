const subsets = arr => {
  let results = [];

  generate(results, [], arr, 0);

  return results;
};

const generate = (results, current, arr, index) => {
  results.push([...current]);
  for (let i = index; i < arr.length; i++) {
    current.push(arr[i]);
    generate(results, current, arr, i + 1);
    current.pop();
  }
};
// console.log(subsets([1, 2, 3]));
