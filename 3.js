/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
  let tempStr = [];
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    let foundIndex = tempStr.indexOf(s[i]);

    if (foundIndex == -1) {
      tempStr.push(s[i]);
    } else {
      tempStr.splice(0, foundIndex);
      // tempStr = [s[i]];
    }

    console.log(tempStr)

    longest = Math.max(longest, tempStr.length);
  }

  return longest;
};

// const str = "abcabcbb";
const str = "aabaab!bb";


const result = lengthOfLongestSubstring(str);
console.log(result);
