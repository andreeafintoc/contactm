
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/**
 * User Model
 *
 */
var userSchema = new Schema({
  firstName: { type: String, default: '' },  // Name of the user
  lastName: { type: String, default: '' },  // Name of the user
  streetAddress: { type: String, default: '' },  // Address
  city: { type: String, default: '' },  // City
});

// userSchema.methods.comparePassword = function(candidatePassword, callback) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) return callback(err);
//     callback(null, isMatch);
//   });
// };


userSchema.statics.deleteUser = function(id, deleted, callback) {
  this.findOneAndUpdate({ _id: id }, { $set: { deleted: deleted } }, function(err, user) {
    if (err) {
      callback(err);
    } else {
      events.chain({
         'users:delete': {
          user: user
        }
      });
      callback(err, product);
    }
  });
};


module.exports = mongoose.model('User', userSchema);
