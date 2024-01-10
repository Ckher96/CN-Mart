require("dotenv").config()

const app = require("./app");
const mongoose = require("mongoose");

app.listen(5000, () => {
  console.log("connected");
});
mongoose.connect(process.env.DB);
module.exports = app;
