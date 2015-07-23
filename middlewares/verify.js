
module.exports = function(req, res, next) {
  var token = req.body.token
  if (token) {
    jwt.verify(token, process.env.secret, function(err, decoded) {
      if (err) {
        res.json({ success: false, message: 'Failed to authenticate token.'})
      }
      else {
        req.decoded = decoded
        next()
      }
    }) 
  }
  else {
    res.status(403).send({
      success: false,
      msg: 'No token provided.'
    })
  }
}
