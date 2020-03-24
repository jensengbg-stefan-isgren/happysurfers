const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  timestamp: {},
  orderNumber: {},
  items: [],
  totalValue: Number,
  eta: Number
});

module.exports = historySchema;
