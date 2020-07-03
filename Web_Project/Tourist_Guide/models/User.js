var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    emailId: String,
    password: String,
    reEnterPassword: String,
    phoneNumber: String
});

module.exports = mongoose.model('User', UserSchema);
