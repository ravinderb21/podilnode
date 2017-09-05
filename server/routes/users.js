var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://rav:mmivb1112@ds151117.mlab.com:51117/mytasklist_rav');

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

router.get('/', (req, res) => {
  db.collection('users')
    .find((err, users) => {
      if(err) {
        sendError(err, res);
      }
      else {
        response.data = users;
        res.json(response);
      }
    })
});

module.exports = router;