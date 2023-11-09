const express = require('express')
const fillerData = require("./FillerData/FillerData")
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/store", (req, res) => {
    res.json(fillerData)
})

app.listen(5000)