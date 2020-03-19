const { Router } = require("express");
const router = new Router();

const cartController = require("../controllers/cartController");

router
  .route("/")
  .post(cartController.addToShoppingCart)
  .get(cartController.showShoppingCart);

// router.post("/", async (req, res) => {
//   const order = {
//     eta: 13,
//     orderNr: "SW921389B"
//   };

//   setTimeout(() => {
//     res.send(order);
//   }, 2000);
// });

module.exports = router;
