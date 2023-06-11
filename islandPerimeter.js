function islandPerimeter(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let perimeter = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4; // count all sides by default

        // check neighboring cells
        if (i > 0 && grid[i - 1][j] === 1) {
          perimeter -= 2; // subtract 2 if there's a land cell above
        }
        if (j > 0 && grid[i][j - 1] === 1) {
          perimeter -= 2; // subtract 2 if there's a land cell to the left
        }
      }
    }
  }

  return perimeter;
}

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(islandPerimeter(grid));
