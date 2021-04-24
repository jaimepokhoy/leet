const prefix = "http://tinyurl/com/";
const base = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const len = 6;
const mapping = [];

const shorten = longUrl => {
  let short = "";

  for (let i = 0; i < len; i++) {
    console.log(Math.random());
    console.log(Math.random() * base.length);
    short += base[Math.floor(Math.random() * base.length)];
  }

  return short;
};

const encode = longUrl => {
  let code = "";
  let index =
    mapping.indexOf(longUrl) !== -1
      ? mapping.indexOf(longUrl)
      : mapping.push(longUrl) - 1;

  while (index) {
    console.log(index);
    code += base[index % 62];
    console.log(code);
    index = parseInt(index / 62);
    console.log(index);
  }

  const shortUrl =
    prefix +
    code
      .split("")
      .reverse()
      .join("")
      .padStart(len, "0");

  return shortUrl;
};

console.log(shorten("chill/2/profile"));
console.log(shorten("chill/2/age1"));
console.log(shorten("chill/2/age2"));
console.log(shorten("chill/2/age3"));
console.log(shorten("chill/2/age4"));
console.log(shorten("chill/2/age5"));
console.log(shorten("chill/2/age6"));
console.log(shorten("chill/2/age7"));
console.log(shorten("chill/2/age8"));
console.log(shorten("chill/2/age9"));
console.log(shorten("chill/2/age19"));
console.log(shorten("chill/2/age29"));
