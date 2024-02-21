#!/usr/bin/node
const request = require('request');
// Get the URL from the command line arguments
const url = process.argv[2];

// Perform a GET request
request
  .get(url)
  .on('response', (response) => {
    console.log('code: ' + response.statusCode);
  });
