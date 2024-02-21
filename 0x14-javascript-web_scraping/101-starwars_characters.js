#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiUrl = 'https://swapi.dev/api/films/' + movieId + '/';

request(apiUrl, async (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const filmData = JSON.parse(body);
  const characters = filmData.characters;

  // Function to fetch character details
  const fetchCharacterDetails = (characterUrl) => {
    return new Promise((resolve, reject) => {
      request(characterUrl, (err, r, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(body).name);
        }
      });
    });
  };

  // Fetch and print character names
  console.log(`Characters of ${filmData.title}:`);
  try {
    for (const charUrl of characters) {
      const characterName = await fetchCharacterDetails(charUrl);
      console.log(characterName);
    }
  } catch (err) {
    console.error('Error fetching character details:', err);
  }
});
