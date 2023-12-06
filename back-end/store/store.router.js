const router = require("express").Router();
const Item = require("../models/Item")

const { fillerData } = require("../FillerData/FillerData");

router.route("/").get(async (req, res) => {
  const items = await Item.find()
  res.json({ data: items });
});

router.route("/:category").get((req, res) => {
  const { category } = req.params;
  const filteredData = fillerData.filter((item) => item.cat === category);
  if (!filteredData.length) res.json({ err: "no items" });
  else res.json({ data: filteredData });
});

module.exports = router;
