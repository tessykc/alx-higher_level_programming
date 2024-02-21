#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) { console.log(error); return; }
  const jsonBody = JSON.parse(body);
  let wedgeCount = 0;
  const fetchCharacterData = (charUrl) => {
    return new Promise((resolve, reject) => {
      request(charUrl, (error, response, body) => {
        if (error) { reject(error); return; }
        const characterData = JSON.parse(body);
        resolve(characterData);
      });
    });
  };

  const checkWedgePresence = async (charUrl) => {
    try {
      const characterData = await fetchCharacterData(charUrl);
      if (characterData && characterData.url === 'https://swapi-api.alx-tools.com/api/people/18/') {
        wedgeCount++;
      }
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  };

  (async () => {
    for (const result of jsonBody.results) {
      for (const charUrl of result.characters) {
        await checkWedgePresence(charUrl);
      }
    }
    console.log('Number of movies with Wedge Antilles:', wedgeCount);
  })();
});
