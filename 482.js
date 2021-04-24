const licenseFormatting = (S, K) => {
  const formattedInput = S.replace(/-/g, "");
  let temp = 1;
  let result = "";
  for (let i = formattedInput.length - 1; i >= 0; i--) {
    if (temp < K) {
      if (formattedInput[i] !== "-")
        result = formattedInput[i].toUpperCase() + result;
    } else {
      const addition =
        i === 0
          ? formattedInput[i].toUpperCase()
          : "-" + formattedInput[i].toUpperCase();
      result = addition + result;
      temp = 0;
    }
    temp++;
  }
  return result;
};

const S = "--a-a-a-a--";
// Return "2-5G-3J"
console.log(licenseFormatting(S, 2));
