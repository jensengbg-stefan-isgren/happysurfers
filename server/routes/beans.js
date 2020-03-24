const { Router } = require("express");
const router = new Router();
const beansController = require("../controllers/beansController");

router
  .route("/")
  .get(beansController.getProducts)

module.exports = router;
