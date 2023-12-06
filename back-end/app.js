const express = require("express")
const cors = require("cors");
const storeRouter = require("./store/store.router");
const cartRouter = require("./cart/cart.router");

const app = express()

app.use(cors());
app.use(express.json());

app.use("/store", storeRouter);

app.use("/cart", cartRouter);

module.exports = app