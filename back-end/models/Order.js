const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  items: [{}],
  totalPrice: Number,
});

module.exports = mongoose.model("Order", orderSchema)