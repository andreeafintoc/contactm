var contact = require('./contact');
var api = require('./api');
var User = require('../../models/User');


module.exports = function(app) {
  app.get('/contact', contact.index);
  app.post('/contact', contact.postNew);
  app.delete('/contact', contact.delete);
}



// module.exports = function(app) {
//   app.get('/browse', contact.index);
// }