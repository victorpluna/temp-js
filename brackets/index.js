var validator = require('./brackets-validator');

if (validator.validate(process.argv[2])) {
    console.log('valid brackets string');
} else {
    console.log('invalid brackets string');
}