const calculateTime = (keyboard, word) => {
  let curr = 0;
  let moves = 0;
  const wordArr = word.split("");

  for (let char of wordArr) {
    moves += Math.abs(curr - keyboard.indexOf(char));
    curr = keyboard.indexOf(char);
  }

  return moves;
};

// const keyboard = "abcdefghijklmnopqrstuvwxyz";
const keyboard = "pqrstuvwxyzabcdefghijklmno";
console.log(calculateTime(keyboard, "leetcode"));
