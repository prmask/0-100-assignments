// ## Reading the contents of a file
//
// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

// Function to read the contents of a file and print to console
function readFileAndPrint(filePath) {
  // Read file asynchronously and returns a promise
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Function to simulate an expensive async operation
function simulateExpensiveOperation() {
  return new Promise((resolve) => {
    console.log("Simulating expensive operation...");
    setTimeout(() => {
      // Simulate an expensive computation
      const result = Math.sqrt(Math.pow(2, 10) + Math.pow(3, 5));
      console.log("Expensive operation completed.");
      resolve(result);
    }, 4000); // Adjust the delay to make it a more or less expensive computation
  });
}

// Function to process file and run the expensive operation
async function processFileOperation(filePath) {
  try {
    // read file asynchronously
    const fileContent = await readFileAndPrint(filePath);
    console.log("File Contents:");
    console.log(fileContent);

    // Perform an expensive operation asynchronously
    const expensiveOperation = await simulateExpensiveOperation();
    console.log("Result: ", expensiveOperation);
  } catch (error) {
    console.error("Error: ", error.message);
  }
}

// Specify the file path here
const filePath = "./file.txt";

// Call the function to read the file and print its contents
processFileOperation(filePath);
