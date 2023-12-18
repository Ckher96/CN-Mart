const router = require("express").Router();
const Order = require("../models/Order");

router
  .route("/")
  .post(async (req, res) => {
    const { data } = req.body;
    const newOrder = await Order.create(data);
    console.log(newOrder);
  })
  .get(async (req, res) => {
    const items = await Order.find();
    res.json({ data: items });
  });

module.exports = router;
