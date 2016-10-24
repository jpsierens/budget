const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TransactionCategory = require('../models/TransactionCategory.js');

/* GET /transactionCategories listing. */
router.get('/', (req, res, next) => {
 TransactionCategory.find().sort({ updatedAt: -1 }).exec((err, tc) => {
    if (err) return next(err);
    res.json(tc);
  });
});

/* POST /transactionCategories */
router.post('/', (req, res, next) => {
 TransactionCategory.create(req.body,  (err, tc) => {
    if (err) return next(err);
    console.log('New transactionCategories created:');
    console.log(tc);
    res.json(tc);
  });
});

/* GET /transactionCategories/id */
router.get('/:id', (req, res, next) => {
 TransactionCategory.findById(req.params.id, (err, tc) => {
    if (err) return next(err);
    res.json(tc);
  });
});

/* PUT /transactionCategories/:id */
router.put('/:id', (req, res, next) => {
 TransactionCategory.findByIdAndUpdate(req.params.id, req.body, (err, tc) => {
    if (err) return next(err);
    res.json(tc);
  });
});

/* DELETE /transactionCategories/:id */
router.delete('/:id', (req, res, next) => {
 TransactionCategory.findByIdAndRemove(req.params.id, req.body, (err, tc) => {
    if (err) return next(err);
    console.log('transaction category deleted:');
    console.log(tc);
    res.json(tc);
  });
});

module.exports = router;