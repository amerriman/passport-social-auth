var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema ({
  name: String,
  email: String,
  oauthID: String
});


mongoose.connect('mongodb://localhost/passport-social-auth');

//this is where we create the collection in the database
module.exports = mongoose.model('users', User);
