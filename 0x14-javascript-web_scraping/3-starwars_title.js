#!/usr/bin/node
const request = require('request');
// Get the API URL from the command line arguments
const movieID = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/:id' + movieID


request(url, (error, response, body) => {
  if (error) {console.log(error); }
    // Print the error if there is an issue with the request
    const jsonBody = JSON.parse(body);
    console.log(jsonBody.title);
  }
)