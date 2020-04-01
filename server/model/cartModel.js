const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = cartSchema;
