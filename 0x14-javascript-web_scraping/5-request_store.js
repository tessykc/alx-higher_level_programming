#!/usr/bin/node
const request = require('request');
const fs = require('fs');

// Check if both URL and file path are provided as command line arguments
if (process.argv.length < 4) {
  console.error('Usage: node fetch_and_store.js <URL> <FILE_PATH>');
  process.exit(1);
}

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Perform a GET request to fetch the contents of the webpage
request.get(url, (error, response, body) => {
  if (error) {
    // Print the error if there is an issue with the request
    console.error(`Error making request: ${error.message}`);
  } else {
    // Write the body content to the specified file in utf-8 encoding
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error(`Error writing to the file: ${writeError.message}`);
      } else {
        console.log(`Webpage content successfully stored in ${filePath}`);
      }
    });
  }
});
