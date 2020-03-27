const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {},
  email: {},
  uuid: {},
  stampCounter: {},
  freeCoffee: {}
});

module.exports = userSchema;
