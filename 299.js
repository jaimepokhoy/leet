/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      if (secret.includes(guess[i])) {
        cows++;
      }
    }
  }

  return `${bulls}A${cows}B`;
};

const secret =  "1123";
const guess =   "0111";

console.log(getHint(secret, guess));
