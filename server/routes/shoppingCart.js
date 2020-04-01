const { Router } = require("express");
const router = new Router();

const cartController = require("../controllers/cartController");

router
  .route("/")
  .post(cartController.addToShoppingCart)
  .get(cartController.showShoppingCart)
  .patch(cartController.updateShoppingCart)
  .delete(cartController.removeFromShoppingCart);

router.route("/delete").delete(cartController.clearShoppingCart);

module.exports = router;
