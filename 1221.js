const balancedStringSplit = str => {
  let curr = 0;
  let count = 0;

  for (let char of str) {
    curr += char === "L" ? 1 : -1;
    count += curr === 0 ? 1 : 0;
  }

  return count;
};

const str = "RLLLLRRRLR";
console.log(balancedStringSplit(str));
