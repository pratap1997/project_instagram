var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema);