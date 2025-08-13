// server.js

// Load the built-in HTTP module
const http = require('http');

// Define server details
const hostname = '127.0.0.1'; // localhost
const port = 3000; // You can change the port if needed

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n'); // Response text
});

// Start listening on the given port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});