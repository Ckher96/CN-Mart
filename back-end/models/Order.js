const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  items: Array,
  totalPrice: Number,
});

module.exports = mongoose.model("Order", orderSchema)