const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {},
  email: {},
  uuid: {},
});

module.exports = userSchema;
