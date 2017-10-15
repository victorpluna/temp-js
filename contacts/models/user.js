var database = require('../database');
var mongoose = database.db;
var Contact = require('./contact');

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 120},
    age: {type: Number, required: true},
    contacts: [{ type: mongoose.Schema.ObjectId, ref: 'Contact' }]
});

module.exports = mongoose.model('User', UserSchema);