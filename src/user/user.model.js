const mongoose = require('mongoose');

var set_password = (password)=>{ return password }

const UserSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: Number},
  password: {type: String, set: set_password}
});


const User = mongoose.model('User', UserSchema);

module.exports = User;
