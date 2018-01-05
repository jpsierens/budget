const mongoose = require('mongoose');

// Schema to enforce consistent structure.
const TransactionCategory = new mongoose.Schema({
  name: { type: String, unique: true }
});

module.exports = mongoose.model('TransactionCategory', TransactionCategory);
