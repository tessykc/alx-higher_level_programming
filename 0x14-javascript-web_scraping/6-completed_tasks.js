#!/usr/bin/node
const request = require('request');

// API URL for fetching todos data
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Perform a GET request to fetch the todos data
request.get(apiUrl, (error, response, body) => {
  if (error) {
    // Print the error if there is an issue with the request
    console.error(`Error making API request: ${error.message}`);
  } else {
    try {
      // Parse the JSON response
      const todosData = JSON.parse(body);

      // Initialize a map to store the count of completed tasks for each user
      const completedTasksByUser = new Map();

      // Iterate through todos and count completed tasks for each user
      todosData.forEach((todo) => {
        if (todo.completed) {
          if (completedTasksByUser.has(todo.userId)) {
            completedTasksByUser.set(todo.userId, completedTasksByUser.get(todo.userId) + 1);
          } else {
            completedTasksByUser.set(todo.userId, 1);
          }
        }
      });

      // Print users with completed tasks
      completedTasksByUser.forEach((completedTasks, userId) => {
        console.log(`User ID ${userId}: ${completedTasks} completed task(s)`);
      });
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});
