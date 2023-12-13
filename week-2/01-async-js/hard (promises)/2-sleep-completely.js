/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    const startTime = Date.now();

    function checkTime() {
      if (Date.now() - startTime >= milliseconds) {
        resolve();
      } else {
        setTimeout(checkTime, 0);
      }
    }

    checkTime();
  });
}

// sleep(3000)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });
module.exports = sleep;
