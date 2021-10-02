// const longestStrChain = (words) => {
//   const wordSet = new Set(words);

//   const wordMap = new Map();

//   // console.log(wordSet);

//   for (let i = 0; i < words.length; i++) {
//     let predecessors = [];

//     for (let x = 0; x < words[i].length; x++) {
//       let cutWord = words[i].slice(0, x) + words[i].slice(x + 1);
//       if (words.includes(cutWord)) {
//         wordSet.add(cutWord);
//       }
//       // console.log(cutWord)
//       if (words.includes(cutWord) || wordSet.has(cutWord)) {
//         predecessors.push(cutWord);

//         if (wordMap.has(cutWord)) {
//           console.log(cutWord, wordMap.get(cutWord));
//           // predecessors.push(wordMap.get(cutWord));
//           predecessors = predecessors.concat(wordMap.get(cutWord));
//         }
//       }
//     }

//     // console.log(predecessors);

//     wordMap.set(words[i], predecessors);
//   }

//   console.log(wordMap);
// };

const longestStrChain = (words) => {
  const memory = {};

  words.sort((a, b) => a.length - b.length);

  console.log(words)
  for (let word of words) {
    let longest = 0;

    for (let i = 0; i < word.length; i++) {
      let pre = word.slice(0, i) + word.slice(i + 1);
      longest = Math.max(longest, (memory[pre] || 0) + 1);
    }
    memory[word] = longest;
  }

  return Math.max(...Object.values(memory));
};

const words = ["a", "b", "ba", "bca", "bda", "bdca"];

console.log(longestStrChain(words));
