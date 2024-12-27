const http = require('http');
const fs = require('fs');

const requestListener = (request, response) => {
  try {
    const data = fs.readFileSync('./nonexistent.txt'); // Simulate an error
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.error('Error:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');