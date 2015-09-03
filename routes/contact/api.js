var User = require('../../models/User');

exports.get = function(req, res) {
  User.find({ deleted: false }, function(err, users) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json({ users: users });
    }
  });
};

exports.delete = function(req, res) {
  User.update( { $set: { deleted: true } }, function(err, results) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json({ results: results });
    }
  });
};