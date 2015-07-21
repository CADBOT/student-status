var express = require('express');
var mongoose = require('mongoose');

//var mongoUri = 'mongodb://***REMOVED***:***REMOVED***@ds031628.mongolab.com:31628/student-status';
var mongoUri = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@ds031628.mongolab.com:31628/student-status';
mongoose.connect(mongoUri);
