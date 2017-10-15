var express = require('express');
var User = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().populate('contacts').exec(function (err, users) {
    if (err) {
      res.status(400).send(err);
    }else{
      res.status(200).send(users);
    }
  });
});

/* POST users create. */
router.post('/', function(req, res) {
  var user = new User(req.body);
  user.save(function(err){
    if(err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(user);
    }
  });
});

/* GET user detail. */
router.get('/:id', function (req, res) {
  User.findById(req.params.id).populate('contacts').exec(function(err, user){
    if (err || !user) {
      res.status(400).send(err);
    } else{
      res.status(200).send(user);
    }
  });
});

/* PUT user update. */
router.put('/:id', function(req, res) {
  User.findOneAndUpdate({'_id': req.params.id}, req.body, {new: true}, function(err, user) {
    if(err || !user) {
      res.status(400).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

/* DELETE user remove. */
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove({'_id': req.params.id}, function (err, user) {
    if(err || !user) {
      res.status(400).send(err);
    } else {
      res.status(200).send({'detail': 'user removed'});
    }
  });
});

module.exports = router;
