const maximumWealth = (accounts) => {
  const sums = accounts.map((account) => {
    return account.reduce((sum, amount) => sum + amount, 0);
  });

  return Math.max(...sums);
};

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(accounts));
