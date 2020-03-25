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
    uuid: mUUID4.toString()
  });
  user
    .save()
    .then(doc => {
      // console.log(doc);
    })
    .catch(error => {
      // console.log(error);
    });

  response.send(user);
};

exports.getUser = async (request, response) => {
  let users = await User.findOne();
  response.send(users);
};

exports.getUserOrderHistory = async (request, response) => {
  let his = await history.find({ uuid: request.params.id });
  response.send(his);
};
