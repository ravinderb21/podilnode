var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/podil');
let db = mongoose.connection;

db.once('open', function() {
  console.log('Connected to MongoDB');
});

db.on('error', function(err) {
  console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/dist')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const users = require('./server/routes/users');
app.use('/users', users);

const photos = require('./server/routes/photos');
app.use('/photos', photos);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});