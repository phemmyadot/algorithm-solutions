const sum = require('./sum_n.js');

test('should return the sum of all numbers from 1 to n', () => {
  const n = 10;
  const expectedResult = 55; // Sum of even numbers: 1+2+3+4+5+6+7+8+9+10 == 55

  const result = sum(n);
  expect(result).toEqual(expectedResult);
});
