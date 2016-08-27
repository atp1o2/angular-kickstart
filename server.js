// require import of HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');

const PORT = 8000;

// function to handle requests and send response
function handleRequest (request, response) {
  response.end('Response Received. Path Hit: ' + request.url);
}

// Create a server
var server = http.createServer(handleRequest);

// Start server
server.listen(PORT, function () {
  // Callback triggered when server is successfully listening
  console.log('Server listening on: http://localhost:%s', PORT);
});
