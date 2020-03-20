const mongoose = require("mongoose");
mongoose.pluralize(null);
const cartSchema = require("../model/cartModel");
const cart = mongoose.model("shoppingcart", cartSchema);

exports.addToShoppingCart = (request, response) => {
  const cartItem = new cart({
    title: request.body.title,
    product_id: request.body.product_id,
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

exports.updateShoppingCart = async (request, response) => {
  console.log(request.body);
  response.send(request.body);

  cart.findOne({ product_id: request.body.product_id }, function(err, doc) {
    console.log(request.body);
    doc.quantity = request.body.quantity;
    doc.save();
  });
};
