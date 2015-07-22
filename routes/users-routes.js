var User = require('../models/User');

module.exports = function(router) {
  router.route('/users')
    .get(function(req, res) {
      User.find({}, function(err, data) {
        if (err) {
          res.status(500).json({msg: 'server error'});
        }
        res.json(data)
      });
    })
    .post(function(req, res) {
      var user = new User(req.body);
      user.save(function(err, data) {
        if (err) {
          res.status(500).json({msg: 'server error'});
        }
        res.json(data)
      })
    });
};
