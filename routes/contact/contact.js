
var User = require('../../models/User');

/* GET users listing. */
exports.index = function(req, res, next) {
  User.find({ deleted: false }, function(err, users) {
    // display users here.
  });

  //-res.send('respond with a resource');
  //-req.body.firstName;
  //-req.body.name;
  //-req.body.streetAddress;
  //-req.body.city;
};

exports.postNew = function(req, res, next) {
  // implement
};

exports.delete = function(req, res, next) {
    User.deleteUser(req.params.id, true, function(err, user) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json({ user: user });
    }
  });
};