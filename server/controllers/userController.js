const MUUID = require("uuid-mongodb");
const mongoose = require("mongoose");
mongoose.pluralize(null);
const historySchema = require("../model/historyModel");
const userSchema = require("../model/userModel");
const User = mongoose.model("users", userSchema);
const history = mongoose.model("orderhistory", historySchema);

const mUUID4 = MUUID.v4();

exports.createUser = async (request, response) => {
  let body = request.body;
  let user = new User({
    name: body.name,
    email: body.email,
    uuid: mUUID4.toString(),
    stampCounter: 0,
    freeCoffee: 0
  });
  user
    .save()
    .then(user => {
      response.send(user);
    })
    .catch(error => {
      console.log(error);
    });
};

exports.getUser = async (request, response) => {
  let users = await User.findOne({ name: { $ne: "genericOrders" } });
  response.send(users);
};

exports.getUserOrderHistory = async (request, response) => {
  let his = await history.find({ uuid: request.params.uuid });
  response.send(his);
};

exports.addStamps = async (request, response) => {
  let user = await User.findOne({ uuid: request.params.uuid });
  if (user.stampCounter < 3) {
    user.stampCounter++;
  } else {
    user.stampCounter = 1;
    user.freeCoffee++;
  }
  user.save();
  response.send(user);
};
