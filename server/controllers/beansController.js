const MUUID = require("uuid-mongodb");
const mongoose = require("mongoose");
const productSchema = require("../model/productModel");
const product = mongoose.model("products", productSchema);
const userSchema = require("../model/userModel");
const User = mongoose.model("users", userSchema);

exports.getProducts = async (request, response) => {
  try {
    let products = await product.find();
    response.send(products);
  } catch (error) {
    console.log("CANT FIND IN DATABASE", error);
  }
};

exports.getKey = async (request, response) => {
  let user = await User.findOne({ name: "genericOrders" }).exec();
  if (user) {
    response.send(user);
  } else {
    const mUUID4 = MUUID.v4();
    let user = new User({
      name: "genericOrders",
      email: "genericOrders@airbean.com",
      uuid: mUUID4.toString()
    });
    user
      .save()
      .then(user => {
        response.send(user);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
