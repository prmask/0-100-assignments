/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase as the result is case insensitive
  const lowStr = str.toLowerCase().replace(/\W+/g, "");

  // Return the result after checking if the reverse of the string is equal to the string
  return lowStr === lowStr.split("").reverse().join("");
}

// console.log(isPalindrome("Able, was I ere I saw Elba!"));
module.exports = isPalindrome;
