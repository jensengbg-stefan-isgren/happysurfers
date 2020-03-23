const mongoose = require("mongoose");
mongoose.pluralize(null);
const cartSchema = require("../model/cartModel");
const cart = mongoose.model("shoppingcart", cartSchema);

exports.removeFromShoppingCart = async (request, response) => {
  cart.findByIdAndRemove({ _id: request.body._id }).then(item => {
    response.send(item);
  });
};

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
      // console.log(doc);
    })
    .catch(error => {
      // console.log(error);
    });
  response.send(cartItem);
};

exports.showShoppingCart = async (request, response) => {
  let shoppingCart = await cart.find();
  response.send(shoppingCart);
};

exports.updateShoppingCart = async (request, response) => {
  await cart.findOne({ product_id: request.body.product_id }, function(
    err,
    doc
  ) {
    doc.quantity = request.body.quantity;
    doc.save();
    response.send(request.body);
  });
};

exports.clearShoppingCart = async (request, response) => {
  let items = await cart.deleteMany({}, function(err) {});
  response.send(items);
};
