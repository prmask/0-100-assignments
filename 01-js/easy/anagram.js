/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const strLoc1 = str1.toLowerCase().replace(/[^\w]/g, "");
  const strLoc2 = str2.toLowerCase().replace(/[^\w]/g, "");

  // Checks if the lengths are same
  if (strLoc1.length != strLoc2.length) return false;

  // Sort the characters and compare the resulting strings
  const sortedStr1 = strLoc1.split("").sort().join();
  const sortedStr2 = strLoc2.split("").sort().join();

  if (JSON.stringify(sortedStr1) === JSON.stringify(sortedStr2)) return true;
}

module.exports = isAnagram;
