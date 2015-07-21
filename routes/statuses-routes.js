var express = require('express');
var bodyParser = require('body-parser');
var Status = require('../models/Status');

var statusRouter = express.Router();
statusRouter.use(bodyParser.json());

statusRouter.get('/:statuses', function(req, res) {
  Status.find({}, function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).json({msg: 'internal server error'});
    } 
    res.json(data);
  }); 
});

statusRouter.post('/:statuses', function(req, res) {
  var newStatus = new Status(req.body);
  newStatus.save(function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).json({msg: 'internal server error'});
    }
    res.json(data)
  });
});

module.exports = statusRouter;
