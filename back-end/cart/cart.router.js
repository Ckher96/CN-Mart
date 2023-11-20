const router = require("express").Router();

const { orders } = require("../FillerData/FillerData.js");

router.route("/").post((req, res) => {
  const { data } = req.body;
  orders.push(data);
  console.log(orders)
  
});

module.exports = router;
