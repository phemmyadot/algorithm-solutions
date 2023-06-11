const numIslands = function (grid) {
  let islandCounts = 0;

  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] !== 1
    ) {
      return;
    }
    grid[i][j] = 0;

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        islandCounts++;
        dfs(i, j);
      }
    }
  }
  return islandCounts;
};

const matrix1 = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
];
const matrix2 = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];
console.log(numIslands(matrix1));
console.log(numIslands(matrix2));
