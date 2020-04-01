const { Router } = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router
  .route("/")
  .post(userController.createUser)
  .get(userController.getUser);

router
  .route("/:uuid")
  .get(userController.getUserOrderHistory)
  .post(userController.addStamps);
module.exports = router;
