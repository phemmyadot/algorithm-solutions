const sum = require('./sum_even.js');

test('should return the sum of even numbers in the array', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const expectedResult = 12; // Sum of even numbers: 2 + 4 + 6 = 12

  // Call the function and assert the result
  const result = sum(arr);
  expect(result).toEqual(expectedResult);
});

test('should return 0 if no even numbers are present', () => {
  const arr = [1, 3, 5, 7];
  const expectedResult = 0; // No even numbers in the array

  // Call the function and assert the result
  const result = sum(arr);
  expect(result).toEqual(expectedResult);
});

// Add more test cases if needed
