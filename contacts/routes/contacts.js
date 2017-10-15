var express = require('express');
var Contact = require('../models/contact');
var User = require('../models/user');
var router = express.Router();

/* POST contacts create. */
router.post('/:user_id/contacts', function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err || !user) {
            res.status(400).send(err);
        } else {
            var contact = new Contact(Object.assign(req.body, {_user: user._id}));
            contact.save(function (err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    user.contacts.push(contact)
                    user.save()
                    res.status(201).send(user);
                }
            });
        }
    });
});

/* PUT contact update. */
router.put('/:user_id/contacts/:id', function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err || !user) {
            res.status(400).send(err);
        } else {
            Contact.findOneAndUpdate({'_id': req.params.id}, req.body, {new: true}, function (err, contact) {
                if (err || !contact) {
                    res.status(400).send(err);
                } else {
                    res.status(200).send(contact);
                }
            });
        }
    });
});

/* DELETE contact remove. */
router.delete('/:user_id/contacts/:id', function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err || !user) {
            res.status(400).send(err);
        } else {
            Contact.findByIdAndRemove({'_id': req.params.id}, function (err, contact) {
                if (err || !contact) {
                    res.status(400).send(err);
                } else {
                    res.status(200).send({'detail': 'contact removed'});
                }
            });
        }
    });
});

module.exports = router;
