// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and returns a new array with only unique values, removing duplicates.

// Case1: If the array is sorted
function uniqueValues(arr) {
  if (arr.length <= 1) return arr;
  const result = [];

  let number = arr[0];
  result.push(number);
  for (let i = 1; i < arr.length; i++) {
    if (number !== arr[i]) {
      result.push(arr[i]);
      number = arr[i];
    }
  }

  return result;
}

// Case2: If the array is not sorted
// function uniqueValues(arr) {
//   if (arr.length <= 1) return arr;
//   const lookup = {};
//   const result = [];

//   for (const value of arr) {
//     if (!lookup[value]) {
//       lookup[value] = true;
//       result.push(value);
//     }
//   }

//   return result;
// }

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
