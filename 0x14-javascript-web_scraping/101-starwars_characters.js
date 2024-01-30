#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const url = 'https://jsonplaceholder.typicode.com/todos' + movieId;

request(url, async(error, response, body) => {
  if (error) {console.log(error); }
  const result = JSON.parse(body);

  for (const charUrl, of result.characters){
    await new Promise((resolve, reject) => {
      request(charUrl, (err, r, body) => {
        if (err) {
          reject(err);
        } else{
          console.log(JSON.parse(body).name);
          resolve();
        }
      })
    })
  }

})
