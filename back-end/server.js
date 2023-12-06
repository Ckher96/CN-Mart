const app = require("./app");
const mongoose = require("mongoose");

app.listen(5000, () => {
  console.log("connected");
});
mongoose.connect("mongodb://localhost/appdb");
module.exports = app;
