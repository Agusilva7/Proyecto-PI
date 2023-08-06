const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const getVideoGamesId = require('./routes/getVideoGamesId.js');
const getVideoGames = require('./routes/getVideoGames.js');
const getVideoGamesName = require("./routes/getVideoGamesName.js");
const postVideoGames=require("./routes/postVideoGames.js")
const getGenres=require("./routes/getGenres.js")



require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', getVideoGames);
server.use('/', getVideoGamesName);
server.use('/', getVideoGamesId);
server.use('/', postVideoGames);
server.use('/', getGenres);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
