const MUUID = require("uuid-mongodb");
const mongoose = require("mongoose");
const productSchema = require("../model/productModel");
const product = mongoose.model("products", productSchema);

// let timeToDelivery = () => {
//   let distance = Math.floor(Math.random() * 20) + 1;
//   let droneSpeed = 80;

//   let time = (distance / droneSpeed) * 60;
//   time = Math.round(time);
//   return time;
// };

// function generateOrderNr() {
//   let letters = ["X", "Y", "Z"];
//   return `AB${Date.now()}${
//     letters[Math.floor(Math.random() * letters.length)]
//   }`;
// }

exports.getProducts = async (request, response) => {
  try {
    let products = await product.find();
    response.send(products);
  } catch (error) {
    console.log("CANT FIND IN DATABASE", error);
  }
};

// exports.getKey = async (request, response) => {};

// exports.sendOrder = async (request, response) => {
//   let orderedItems = request.body;
//   const order = {
//     eta: timeToDelivery(),
//     orderNr: generateOrderNr(),
//     orderItems: orderedItems
//   };

//   setTimeout(() => {
//     response.send(order);
//   }, 2000);
// };
