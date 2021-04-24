// Input: secret = "1807", guess = "7810"

// Output: "1A3B"

// Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.

const bullsAndCows = (secret, guess) => {
  const usedMap = {};
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls += 1;
    } else if (usedMap[secret[i]]) {
      usedMap[secret[i]]++;
    } else {
      usedMap[secret[i]] = 1;
    }
  }

  for (let x = 0; x < secret.length; x++) {
    if (guess[x] !== secret[x] && usedMap[guess[x]]) {
      cows++;
      usedMap[guess[x]]--;
    }
  }

  return `${bulls}A${cows}B`;
};

//  else if (guess.includes(secret[i])) {
//   cows += 1;
// }

console.log(bullsAndCows("1807", "7810"));
