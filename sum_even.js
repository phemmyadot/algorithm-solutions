let x = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];

const sum = (arr) =>
  arr.reduce((p, c) => {
    return (p += c % 2 === 0 ? c : 0);
  }, 0);

module.exports = sum;
