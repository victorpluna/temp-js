var database = require('../database');
var mongoose = database.db;

var ContactSchema = new mongoose.Schema({
    _user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    type: {type: String, required: true, enum: ['phone','email', 'whatsapp']},
    value: {type: String, required: true, max: 120}
});

module.exports = mongoose.model('Contact', ContactSchema);