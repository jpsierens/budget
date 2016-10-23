const mongoose = require('mongoose');

// Schema to enforce consistent structure.
const TransactionCategory = new mongoose.Schema({
  name: String,
  type: String
});

module.exports = mongoose.model('TransactionCategory', TransactionCategory);
