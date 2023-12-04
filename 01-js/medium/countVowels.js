/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// Array of vowels
const vowels = ["a", "e", "i", "o", "u"];

// Empty object
let obj = {};

// Vowel counter
let i = 1;

function countVowels(str) {
  // Split the array into individual charracters and then check if each of them is a vowel and increase the counter for each vowel
  str.split("").map((element) => {
    if (vowels.includes(element)) {
      if (obj[element]) {
        // If the vowel exists increase the counter
        obj[element] += i;
      } else {
        // If the vowel does not exist enter the vowel
        obj[element] = i;
      }
    }
  });
}

// console.log(countVowels("aeeoooddiooo ppsid uu"));
module.exports = countVowels;
