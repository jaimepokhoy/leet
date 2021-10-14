const numSplits = (s) => {
  let goodSplits = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const str1 = s.slice(0, i + 1);
    const str2 = s.slice(i + 1);

    const set1 = new Set(str1.split(""));
    const set2 = new Set(str2.split(""));

    if (set1.size === set2.size) goodSplits++;
  }

  return goodSplits;
};

// const numSplits = (s) => {
//   let set = new Set();
//   const arr1 = [];
//   const arr2 = [];

//   for (let i = 0; i < s.length; i++) {
//     set.add(s[i]);
//     arr1[i] = set.size;
//   }

//   set = new Set();
//   for (let i = s.length - 1; i >= 0; i--) {
//     set.add(s[i]);
//     arr2[i] = set.size;
//   }

//   let res = 0;
//   for (let i = 1; i < s.length; i++) {
//     if (arr1[i - 1] === arr2[i]) {
//       res++;
//     }
//   }

//   return res;
// };

// // const s = "aacaba";
// const s = "abcd";

// console.log(numSplits(s));
