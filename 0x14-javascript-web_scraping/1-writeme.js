#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
const writeData = process.argv[3];

// Write the content to the file in utf-8
fs.writeFile(filePath, writeData, 'utf-8', (err) => {
  if (err) {
    // Print the error if an error occurred during writing
    console.log('err');
  }
});
