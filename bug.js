const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The above code is susceptible to a common error in Node.js applications: unhandled exceptions.
//If an error occurs during the request handling process, the application may crash without any indication of what happened.
//This is particularly true for asynchronous operations, where errors might not be caught by the main event loop.

//Example Scenario: Imagine the requestListener attempts to access a non-existent file.
//The application will throw an exception, and the server will likely stop responding.
