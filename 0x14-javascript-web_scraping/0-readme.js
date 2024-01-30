#!/usr/bin/node
const fs = require('fs');

// Check if the file path is provided as a command line argument
if (process.argv.length < 3) {
  console.error('Usage: node readfile.js <file_path>');
  process.exit(1);
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the content of the file in utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    // Print the error if an error occurred during reading
    console.error(`Error reading the file: ${err.message}`);
  } else {
    // Print the content of the file if read successfully
    console.log('File content:');
    console.log(data);
  }
});
