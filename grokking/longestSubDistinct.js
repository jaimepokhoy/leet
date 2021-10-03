const longestSubstringWithDistinct = (str, k) => {
  let longest = [];
  let options = [];
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    set.add(str[i]);

    if (set.size > k) {
      set = new Set(str[i]);
      console.log(longest);
      options.push(longest);
      longest = [];
    }
    longest.push(str[i]);
  }

  options.push(longest);

  return Math.max(...options.map((option) => option.length));
};

const input = "cbbebi";
const k = 3;

console.log(longestSubstringWithDistinct(input, k));
