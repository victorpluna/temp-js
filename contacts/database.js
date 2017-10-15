//Import the mongoose module
var mongoose = require('mongoose');

var database = {};

//Set up default mongoose connection
var mongoDB = 'mongodb://victorpluna:123456@ds019846.mlab.com:19846/bravi';
mongoose.connect(mongoDB, {
    useMongoClient: true
});

//Get the default connection
database.db = mongoose;

//Bind connection to error event (to get notification of connection errors)
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = database;