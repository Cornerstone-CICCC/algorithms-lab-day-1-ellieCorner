// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  if (arr.length === 0) return 0;

  const sum = arr.reduce((total, num) => total + num, 0);

  return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30, 40, 50])); // 30
