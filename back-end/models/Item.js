const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    category: String
})

module.exports = mongoose.model("Item", itemSchema)