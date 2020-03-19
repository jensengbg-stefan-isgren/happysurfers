const mongoose = require("mongoose");
mongoose.pluralize(null);
const cartSchema = require("../model/cartModel");
const cart = mongoose.model("shoppingcart", cartSchema);

exports.addToShoppingCart = (request, response) => {
  const cartItem = new cart({
    title: request.body.title,
    product_id: request.body.id,
    price: request.body.price,
    desc: request.body.desc,
    quantity: request.body.quantity
  });

  cartItem
    .save()
    .then(doc => {
      console.log(doc);
    })
    .catch(error => {
      console.log(error);
    });
  response.send(cartItem);
};

exports.showShoppingCart = async (request, response) => {
  let shoppingCart = await cart.find();
  response.send(shoppingCart);
};
