// Create web server with express
// Create a route that listens for POST requests to /comments
// When a POST request is made, parse the incoming request body to get the comment data
// Add the comment to the comments array
// Send back the entire comments array as a JSON response
// Add a route that listens for GET requests to /comments
// When a GET request is made, send back the entire comments array as a JSON response

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comments);
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
// Run the code and make a POST request to /comments with a comment in the request body. Then make a GET request to /comments to see the comment you added.
