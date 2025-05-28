// Exercise 9: Write a function named 'flattenArray' that takes an array of nested arrays and returns a single flattened array.

function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, [6, 7]],
  ])
); // [1, 2, 3, 4, 5, 6, 7]
