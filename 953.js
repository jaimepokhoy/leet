var isAlienSorted = function(words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    const maxWord = Math.max(words[i].length, words[i + 1].length);
    for (let j = 0; j < maxWord; j++) {
      let wordA = order.indexOf(words[i][j]),
        wordB = order.indexOf(words[i + 1][j]);
      if (wordA > wordB) return false;
      else if (wordB > wordA) break;
    }
  }
  return true;
};
