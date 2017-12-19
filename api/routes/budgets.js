const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Budget = require('../models/Budget.js');

/* GET /budgets listing. */
router.get('/', (req, res, next) => {
  Budget.find().sort({ updatedAt: -1 }).exec((err, budgets) => {
    if (err) return next(err);
    res.json(budgets);
  });
});

/* POST /budgets */
router.post('/', (req, res, next) => {
  Budget.create(req.body,  (err, budget) => {
    if (err) return next(err);
    console.log('New budget created:');
    console.log(budget);
    res.json(budget);
  });
});

/* GET /budgets/id */
router.get('/:id', (req, res, next) => {
  Budget.findById(req.params.id, (err, budget) => {
    if (err) return next(err);
    res.json(budget);
  });
});

/* PUT /budgets/:id */
router.put('/:id', (req, res, next) => {
  Budget.findByIdAndUpdate(req.params.id, req.body, (err, budget) => {
    if (err) return next(err);
    res.json(budget);
  });
});

/* DELETE /budgets/:id */
router.delete('/:id', (req, res, next) => {
  Budget.findByIdAndRemove(req.params.id, req.body, (err, budget) => {
    if (err) return next(err);
    console.log('budget deleted:');
    console.log(budget);
    res.json(budget);
  });
});

module.exports = router;
