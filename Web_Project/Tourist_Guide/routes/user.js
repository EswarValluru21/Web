var express = require('express');
var router = express.Router();
var User = require('../models/User.js');

/* INSERT USER */
router.post('/', function (req, res, next) {
    console.log('post method');
    User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET USER BY USERNAME */
router.get('/:userName', function (req, res, next) {
    console.log('request',req.params);
    console.log("userName",req.params.userName);
    User.findOne( {'userName': req.params.userName}, function (err, post) {
        console.log("get");
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
