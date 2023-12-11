// ## Reading the contents of a file
//
// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

// Function to read the contents of a file and print to console
function readFileAndPrint(filename) {
  // Read file asynchronously
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
    } else {
      console.log("File Contents:");
      console.log(data);

      // Simulate an expensive operation (you can adjust the loop iterations)
      simulateExpensiveOperation();
    }
  });
}

// Function to simulate an expensive operation
function simulateExpensiveOperation() {
  console.log("Simulating expensive operation...");
  const iterations = 1000000000; // Adjust the number of iterations to make it more or less expensive

  for (let i = 0; i < iterations; i++) {
    // Some expensive computation (this is just an example)
    const result = Math.sqrt(Math.pow(i, 2) + Math.pow(i + 1, 2));
  }

  console.log("Expensive operation completed.");
}

// Specify the file path here
const filePath = "./file.txt";

// Call the function to read the file and print its contents
readFileAndPrint(filePath);
