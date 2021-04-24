const alienDict = words => {
  const results = new Set();
  const others = new Set();

  for (let i = 0; i <= words.length - 1; i++) {
    for (let x = 0; x < words[i].length; x++) {
      if (words[i + 1]) {
        if (words[i][x] !== words[i + 1][x]) {
          results.add(words[i][x]);
          others.add(words[i + 1][x]);
          break;
        } else {
          others.add(words[i][x]);
        }
      }
    }
  }

  const final = new Set([...results, ...others]);

  return final;
};

// const words = ["baa", "abcd", "abca", "cab", "cad"];
const words = ["caa", "aaa", "aab"];

console.log(alienDict(words));
