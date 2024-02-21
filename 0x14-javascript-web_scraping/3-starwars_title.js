#!/usr/bin/node
const request = require('request');

// Get the API URL from the command line arguments
const movieID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(url, (error, response, body) => {
  if (error) { console.log(error); return; }
  // Check if the response status code is not 200 (OK)
  if (response.statusCode !== 200) {
    console.log(`Failed to fetch movie data for ID ${movieID}`);
    return;
  }
  try {
    const jsonBody = JSON.parse(body);
    console.log(jsonBody.title);
  } catch (parseError) {
    console.log('Error parsing JSON response:', parseError);
  }
});
