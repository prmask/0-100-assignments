// ## Create a counter in JavaScript
//
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
// JavaScript
let count = 0;

function updateCounter() {
  console.log(count++);
}

// Update the counter every second
setInterval(updateCounter, 1000);
