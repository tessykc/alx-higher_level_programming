#!/usr/bin/node
const request = require('request');

// Check if the Movie ID is provided as a command line argument
if (process.argv.length < 3) {
  console.error('Usage: node star_wars_characters.js <MOVIE_ID>');
  process.exit(1);
}

// Get the Movie ID from the command line arguments
const movieId = process.argv[2];

// API URL for fetching movie data
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Perform a GET request to fetch the movie data
request.get(apiUrl, (error, response, body) => {
  if (error) {
    // Print the error if there is an issue with the request
    console.error(`Error making API request: ${error.message}`);
  } else {
    try {
      // Parse the JSON response
      const movieData = JSON.parse(body);

      // Print all character names for the specified movie
      console.log(`Characters in Star Wars Episode ${movieData.title} (Episode ${movieId}):`);
      movieData.characters.forEach((characterUrl) => {
        request.get(characterUrl, (characterError, characterResponse, characterBody) => {
          if (characterError) {
            console.error(`Error fetching character data: ${characterError.message}`);
          } else {
            try {
              const characterData = JSON.parse(characterBody);
              console.log(characterData.name);
            } catch (parseError) {
              console.error(`Error parsing character data: ${parseError.message}`);
            }
          }
        });
      });
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});
