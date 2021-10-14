

const longestStrChain = (words) => {
  words = words.sort((a, b) => b.length - a.length);
  let map = new Map();


  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      const pre = '';
    }
  }
  return words;


};

const words = ["a", "b", "ba", "bca", "bda", "bdca"];

console.log(longestStrChain(words));
