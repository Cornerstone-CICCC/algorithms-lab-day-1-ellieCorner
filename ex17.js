// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  const lookup = {};
  let maxCount = 0;
  let mostFruit = null;

  for (const item of arr) {
    lookup[item] = (lookup[item] || 0) + 1;

    if (lookup[item] > maxCount) {
      maxCount = lookup[item];
      mostFruit = item;
    }
  }

  return mostFruit;
}

console.log(
  mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"])
); // 'apple'
