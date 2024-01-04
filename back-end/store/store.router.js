const router = require("express").Router();
const Item = require("../models/Item")

router.route("/").get(async (req, res) => {
  const items = await Item.find()
  res.json({ data: items });
});

router.route("/:category").get(async (req, res) => {
  const { category } = req.params;
  const categoryData = await Item.find({category: category})
  if (!categoryData.length) res.json({ err: "no items" });
  else res.json({ data: categoryData });
});

module.exports = router;
