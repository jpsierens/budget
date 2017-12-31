const mongoose = require('mongoose');

// Schema to enforce consistent structure.
const TransactionCategory = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('TransactionCategory', TransactionCategory);
