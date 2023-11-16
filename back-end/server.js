const express = require('express')
const app = express()
const cors = require('cors')
const storeRouter = require('./store/store.router')

app.use(cors())

app.use("/store", storeRouter)

app.listen(5000)

module.exports = app