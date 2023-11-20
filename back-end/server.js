const express = require("express");
const app = express();
const cors = require("cors");
const storeRouter = require("./store/store.router");
const cartRouter = require("./cart/cart.router")

app.use(cors());
app.use(express.json())

app.use("/store", storeRouter);

app.use("/cart", cartRouter);

app.listen(5000);

module.exports = app;
