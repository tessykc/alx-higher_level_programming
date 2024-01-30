#!/usr/bin/node
const request = require('request');

// Check if the URL is provided as a command line argument
if (process.argv.length < 3) {
  console.error('Usage: node get_request_status.js <URL>');
  process.exit(1);
}

// Get the URL from the command line arguments
const url = process.argv[2];

// Perform a GET request
request.get(url, (error, response) => {
  if (error) {
    // Print the error if there is an issue with the request
    console.error(`Error making GET request: ${error.message}`);
  } else {
    // Print the status code if the request is successful
    console.log(`Code: ${response.statusCode}`);
  }
});
