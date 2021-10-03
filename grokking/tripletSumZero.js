const findTriplets = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);

  const set = new Set();
  let optionsCounter = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    let curr = -sortedArr[i];
    let copy = [...sortedArr];

    copy.splice(i, 1);

    let starter = i + 1;
    let ender = copy.length - 1;
    for (let x = 0; x < copy.length; x++) {
      if (starter > ender) break;
      if (copy[starter] + copy[ender] == curr) {
        optionsCounter++;
        console.log(curr, copy[starter], copy[ender]);
        set.add(`${i} ${starter} ${ender}`);
        starter++;
        ender--;
        break;
      } else if (copy[starter] + copy[ender] > curr) {
        ender--;
      } else {
        starter++;
      }
    }
  }
  return set.size;
};

const input = [-3, 0, 1, 2, -1, 1, -2];
console.log(findTriplets(input));
