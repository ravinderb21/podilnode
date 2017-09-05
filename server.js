var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
const app = express();

const api = require('./server/routes/api');
app.use('/api', api);

const users = require('./server/routes/users');
app.use('/users', users);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});