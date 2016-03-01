const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const server = express();

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan('dev'));

server.get('*',(req, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'));
});

module.exports = server;
