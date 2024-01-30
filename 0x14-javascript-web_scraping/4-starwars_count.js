const request = require('request');

// Check if the API URL is provided as a command line argument
if (process.argv.length < 3) {
  console.error('Usage: node count_movies.js <API_URL>');
  process.exit(1);
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Perform a GET request to fetch the films data from the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    // Print the error if there is an issue with the request
    console.error(`Error making API request: ${error.message}`);
  } else {
    try {
      // Parse the JSON response
      const filmsData = JSON.parse(body);

      // Initialize a counter for movies with Wedge Antilles
      let moviesWithWedgeCount = 0;

      // Iterate through films and count those where Wedge Antilles is present
      filmsData.results.forEach((film) => {
        if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
          moviesWithWedgeCount++;
        }
      });

      // Print the number of movies with Wedge Antilles
      console.log(`Number of movies with Wedge Antilles: ${moviesWithWedgeCount}`);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});
