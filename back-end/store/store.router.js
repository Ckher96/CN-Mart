const router = require("express").Router()

const fillerData = require("../FillerData/FillerData")

router.route("/").get((req, res) => {
    res.json({data : fillerData})
})

router.route("/:category").get((req, res) => {
    const {category} = req.params
    const filteredData = fillerData.filter(item => item.cat === category)
    if (!filteredData.length) res.json({err : "no items"})
    else res.json({data : filteredData})
    
})

module.exports = router