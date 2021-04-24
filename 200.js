const input = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

const numIslands = grid => {
  let count = 0;

  const dfs = (x, y) => {
    if (grid[x][y] === "1") {
      grid[x][y] = "0";
    } else {
      return;
    }

    if (x < grid.length - 1) {
      console.log("1");
      dfs(x + 1, y);
    }

    if (y < grid.length - 1) {
      console.log("2");
      dfs(x, y + 1);
    }

    if (x > 0 && x < grid.length) {
      console.log("3");
      dfs(x - 1, y);
    }

    if (y > 0 && y < grid.length) {
      console.log("4");
      dfs(x, y - 1);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

console.log(numIslands(input));
