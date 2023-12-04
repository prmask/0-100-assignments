/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  // Start time
  const timeStart = new Date();

  // Calculate the sum from 1 to n
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  // End time
  const timeEnd = new Date();

  // Time taken in seconds
  const timeTaken = (timeEnd - timeStart) / 1000;

  //   console.log(`Sum from 1 to ${n} is ${sum} and it took ${timeTaken} seconds`);

  return timeTaken;
}

// calculateTime(100);
// calculateTime(100000);
// calculateTime(1000000000);
module.exports = calculateTime;
