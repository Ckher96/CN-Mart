const router = require("express").Router();
const Order = require("../models/Order");

router
  .route("/")
  .post(async (req, res) => {
    const { data } = req.body;
    await Order.create(data);
  })
  .get(async (req, res) => {
    const orders = await Order.find();
    res.json({ data: orders });
  });

module.exports = router;
