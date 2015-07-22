var express = require('express');
var app = express();
var mongoose = require('mongoose');

//var mongoUri = 'mongodb://***REMOVED***:***REMOVED***@ds031628.mongolab.com:31628/student-status';
var mongoUri = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@ds031628.mongolab.com:31628/student-status';
mongoose.connect(mongoUri);

var apiRouter = express.Router();
['statuses', 'users'].forEach(function(route) {
    require('./routes/' + route + '-routes')(apiRouter)
});
//require('./routes/statuses-routes')(apiRouter);
console.log(apiRouter);

app.use('/', apiRouter);

var port = process.env.port || 3000;
app.listen(port, function() {
  console.log('Server started on port: ' + port);
});
