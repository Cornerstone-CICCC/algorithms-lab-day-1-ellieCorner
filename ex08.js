// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  const wordList = text.split(" ");

  let longest = "";
  for (const word of wordList) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("The duck loves bananas and grapes")); // 'bananas'
