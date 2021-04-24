const titleToNumber = inp => {
  let sum = 0;
  for (let i = 0; i < inp.length; i++) {
    sum = sum * 26 + (inp.charCodeAt(i) - 64);
  }

  return sum;
};
