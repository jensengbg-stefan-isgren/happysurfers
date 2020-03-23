const { Router } = require("express");
const router = new Router();
const beansController = require("../controllers/beansController");

router
  .route("/")
  .get(beansController.getProducts)
  // .post(beansController.sendOrder);

module.exports = router;
