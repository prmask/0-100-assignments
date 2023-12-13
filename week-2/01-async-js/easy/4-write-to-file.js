// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

// Function to write contents to a file asynchronously
function writeToFileAsync(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Async function to read contents of a file
async function readFromFileAsync(filePath) {
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

// Async function to write to a file
async function writeToTheFile(filePath, newContent) {
  try {
    // Read the existing contents of the file
    const existingContent = await readFromFileAsync(filePath);
    console.log("Existing Content:", existingContent);

    // Append new content to the existing content
    const updatedContent = existingContent + "\n" + newContent;

    // Write the updated content back to the file
    await writeToFileAsync(filePath, updatedContent);
    console.log("File updated successfully.");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Specify the file path and new content here
const filePath = "./file.txt";
const newContent = "This is the new content! ---------------------- ";

// Call the async function to write to the file
writeToTheFile(filePath, newContent);
