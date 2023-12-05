/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// Array of vowels
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  // Vowel counter
  let i = 0;

  // Split the array into individual charracters and then check if each of them is a vowel and increase the counter for each vowel
  str
    .toLowerCase()
    .split("")
    .map((element) => {
      if (vowels.includes(element)) {
        i++;
      }
    });
  return i;
}

module.exports = countVowels;
