// Exercise 16: Write a function named 'sumNestedArray' that takes an array of arrays of numbers and returns the sum of all numbers.

function sumNestedArray(arr) {
  return arr.flat().reduce((a, b) => a + b, 0);
}

console.log(
  sumNestedArray([
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
  ])
); // 36
