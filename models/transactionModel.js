const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    default: 0,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
