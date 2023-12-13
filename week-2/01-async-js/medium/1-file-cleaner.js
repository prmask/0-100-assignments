// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be
// ```
// hello world my name is raman
// ```

const fs = require("fs");

// Read file
function readFileAsync(filePath) {
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

// Write file
function writeFileAsync(filePath, content) {
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

// Remove extra spaces
function removeExtraSpaces(inputString) {
  return inputString.replace(/\s+/g, " ").trim();
}

async function processFile(filePath) {
  try {
    // Read file
    const fileContent = await readFileAsync(filePath);
    console.log("Original string: ", fileContent);

    // Remove extra spaces
    const spaceRemovedContent = removeExtraSpaces(fileContent);
    console.log("Space removed string: ", spaceRemovedContent);

    // Write to file
    await writeFileAsync(filePath, spaceRemovedContent);
    console.log("File written");
  } catch (error) {
    console.error("Error: ", error.message);
  }
}

const filePath = "./file2.txt";

processFile(filePath);
