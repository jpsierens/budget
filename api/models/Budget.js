const mongoose = require('mongoose');

// Schema to enforce consistent structure.
const BudgetSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, default: false },
  note: { type: String, default: '' },
  updatedAt: { type: Date, default: Date.now },
  transactions: [{
    type: { type: String, default: 'expense' },
    amount: String,
    date: String,
    description: String,
    category: { type: String, default: 'other' }
  }]
});

module.exports = mongoose.model('Budget', BudgetSchema);
