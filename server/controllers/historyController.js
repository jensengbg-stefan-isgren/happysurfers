const mongoose = require("mongoose");
mongoose.pluralize(null);
const historySchema = require("../model/historyModel");
const orderHistory = mongoose.model("orderhistory", historySchema);

exports.showOrderHistory = async (request, response) => {
  let history = await orderHistory.find();
  response.send(history);
};

exports.saveOrder = async (request, response) => {
  console.log(request.body);
  response.send(request.body);
};
