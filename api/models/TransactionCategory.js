const mongoose = require('mongoose');

// Schema to enforce consistent structure.
const TransactionCategory = new mongoose.Schema({
  name: String,
  type: { type: String, default: 'expense' }
});

module.exports = mongoose.model('TransactionCategory', TransactionCategory);
