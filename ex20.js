// Exercise 20: Write a function named 'anagramGroups' that takes an array of strings and returns an array of arrays, grouping anagrams together.

function anagramGroups(arr) {
  if (arr.length <= 1) return arr;

  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    const originalWord = arr[i];
    const sortedWord = arr[i].split("").sort().join("");

    if (lookup[sortedWord]) {
      lookup[sortedWord].push(originalWord);
    } else {
      lookup[sortedWord] = [originalWord];
    }
  }

  return Object.values(lookup);
}

console.log(anagramGroups(["bat", "tab", "cat", "act"])); // [['bat', 'tab'], ['cat', 'act']]
