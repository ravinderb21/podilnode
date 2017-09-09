let mongoose = require('mongoose');

// Photo Schema

let photoSchema = mongoose.Schema({

  user_id: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  }

});

let Photo = module.exports = mongoose.model('Photo', photoSchema);
