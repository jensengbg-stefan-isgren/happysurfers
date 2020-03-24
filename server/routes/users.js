const { Router } = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router
  .route("/")
  .post(userController.createUser)
  .get(userController.getUser);

router.route("/:id").get(userController.getUserOrderHistory);
module.exports = router;
