const mongoose = require("mongoose");
const productSchema = require("../model/productModel");
const product = mongoose.model("products", productSchema);

exports.getProducts = async (request, response) => {
  let products = await product.find();
  response.send(products);
};



