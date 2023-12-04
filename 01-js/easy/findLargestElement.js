/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let lrgNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (lrgNum < numbers[i]) {
      lrgNum = numbers[i];
    }
  }
  console.log(lrgNum);
}

// console.log(largest([3, 7, 2, 9, 1]));
module.exports = findLargestElement;
