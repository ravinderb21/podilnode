var express = require('express');

const router = express.Router();

let Photo = require('../models/photo');

router.get('/all/:user_id', (req, res, next) => {
  Photo.find({ user_id: req.params.user_id }, (err, photos) => {
    if(err) {
      res.send(err);
    }
    else {
      res.json(photos);
    }
  });
});

module.exports = router;