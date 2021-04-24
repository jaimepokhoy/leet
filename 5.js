const longestPalindrome = str => {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < 2; j++) {
      let x = i;
      let y = i + j;

      while (x >= 0 && str[x] === str[y]) {
        x--;
        y++;
      }

      y - x - 2 >= res.length ? (res = str.slice(x + 1, y)) : res;
    }
  }
  return res;
};

console.log(longestPalindrome("abbabbab"));
