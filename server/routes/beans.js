const { Router } = require("express");
const router = new Router();
const fs = require("fs");
const beansController = require("../controllers/beansController");

router.route("/").get(beansController.getProducts);

router.post("/", async (req, res) => {
  const order = {
    eta: 13,
    orderNr: "SW921389B"
  };

  setTimeout(() => {
    res.send(order);
  }, 2000);
});

module.exports = router;
