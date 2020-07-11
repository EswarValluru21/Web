var express = require('express');
var router = express.Router();
var Book = require('../models/Book.js');

/* UPDATE BOOK */
router.put('/:id',function (req,res,next) {
  console.log('inside put method', req.params.id);
  console.log('response body', req.body);
  Book.findByIdAndUpdate(req.params.id, req.body, function (err,post) {
    console.log('in update by id');
    if (err) return next(err);
    console.log('response', post);
    res.json(post);
  });
});

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id',function (req,res,next) {
  Book.findByIdAndDelete(req.params.id,function (err,post) {
    if (err) return next(err);
    res.json(post);

  });
});
module.exports = router;
