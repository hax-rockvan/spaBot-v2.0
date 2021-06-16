const express = require('express');

const server = express();

server.all('/', (req, res) => {
  res.send('spaBot v.2.0 is running!');
});

function keepAlive() {
  server.listen(3000, () => {
    console.log('Server is Ready..');
  });
}

module.exports = keepAlive;
