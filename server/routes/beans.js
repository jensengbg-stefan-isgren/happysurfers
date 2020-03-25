const { Router } = require("express");
const router = new Router();
const beansController = require("../controllers/beansController");

router.route("/").get(beansController.getProducts);
router.route("/key").get(beansController.getKey);
module.exports = router;
