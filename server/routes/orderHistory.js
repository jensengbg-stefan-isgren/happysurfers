const { Router } = require("express");
const router = new Router();
const historyController = require("../controllers/historyController");

router
  .route("/")
  .get(historyController.showOrderHistory)
  .post(historyController.sendOrder)
  .delete(historyController.clearDatabase);

module.exports = router;
