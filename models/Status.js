var mongoose = require('mongoose');

var statusSchema = mongoose.Schema({
  student: String,
  content: Boolean,
  why: String
});

var statusModel = mongoose.model('status', statusSchema);

module.exports = statusModel;
