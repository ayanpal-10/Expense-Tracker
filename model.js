const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: String, // income or expense
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', ExpenseSchema);